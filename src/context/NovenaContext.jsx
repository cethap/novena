import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { roomService } from '../services/roomService';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

const NovenaContext = createContext();

export function NovenaProvider({ children }) {
    const [searchParams, setSearchParams] = useSearchParams();

    // Helper to get initial state with priority: URL -> LocalStorage -> Default
    const getInitialState = (key, defaultValue) => {
        // 1. URL Param Logic
        let paramName = key;

        // Handle aliases
        if (key === 'roomCode') {
            if (searchParams.has('room')) paramName = 'room';
            else if (searchParams.has('code')) paramName = 'code';
        }

        // Default Role Logic: If we have a room but no role, assume guest
        if (key === 'role' && !searchParams.get('role')) {
            const hasRoom = searchParams.get('room') || searchParams.get('code');
            if (hasRoom) return 'guest';
        }

        // Get value
        const param = searchParams.get(paramName);
        if (param) return param;

        // 2. LocalStorage
        const storage = localStorage.getItem(`novena_${key}`);
        if (storage) return storage;

        // 3. Default
        return defaultValue;
    };

    const [mode, setMode] = useState(() => {
        const room = searchParams.get('room') || searchParams.get('code');
        const storage = localStorage.getItem('novena_mode');
        return room ? 'group' : (storage || 'normal');
    });

    const [role, setRole] = useState(() => getInitialState('role', null)); // 'host' | 'guest'
    const [roomCode, setRoomCode] = useState(() => getInitialState('roomCode', null));

    // Personalization
    const [familyName, setFamilyName] = useState(() => getInitialState('familyName', ''));
    const [customImage, setCustomImage] = useState(() => getInitialState('image', ''));

    const [syncedState, setSyncedState] = useState(null);
    const [isSyncing, setIsSyncing] = useState(false); // To prevent loop when navigating

    const navigate = useNavigate();
    const location = useLocation();

    // Start a group as Host
    const startGroup = async () => {
        try {
            const code = await roomService.createRoom();
            setRoomCode(code);
            setMode('group');
            setRole('host');
            return code;
        } catch (error) {
            console.error("Error creating room:", error);
            throw error;
        }
    };

    // Join a group as Guest
    const joinGroup = async (code) => {
        try {
            const exists = await roomService.joinRoom(code);
            if (exists) {
                setRoomCode(code);
                setMode('group');
                setRole('guest');
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error joining room:", error);
            return false;
        }
    };

    const leaveGroup = () => {
        setMode('normal');
        setRole(null);
        setRoomCode(null);
        setSyncedState(null);

        localStorage.removeItem('novena_mode');
        localStorage.removeItem('novena_role');
        localStorage.removeItem('novena_roomCode');

        // Clear params
        setSearchParams({}, { replace: true });
        navigate('/');
    };

    // Persistence & Sync Effect
    useEffect(() => {
        const params = {};
        let hasChanges = false;

        // Sync Room
        if (roomCode) {
            localStorage.setItem('novena_roomCode', roomCode);
            params.room = roomCode;
            hasChanges = true;
        } else {
            localStorage.removeItem('novena_roomCode');
        }

        // Sync Role
        if (role) {
            localStorage.setItem('novena_role', role);
            params.role = role;
            hasChanges = true;
        } else {
            localStorage.removeItem('novena_role');
        }

        // Sync Mode
        if (mode) {
            localStorage.setItem('novena_mode', mode);
        } else {
            localStorage.removeItem('novena_mode');
        }

        // Sync Personalization
        if (familyName) {
            localStorage.setItem('novena_familyName', familyName);
            params.familyName = familyName;
            hasChanges = true;
        } else {
            localStorage.removeItem('novena_familyName');
        }

        if (customImage) {
            localStorage.setItem('novena_image', customImage);
            params.image = customImage;
            hasChanges = true;
        } else {
            localStorage.removeItem('novena_image');
        }

        // Only update search params if we refer to room code OR personalization is present
        if (roomCode || familyName || customImage) {
            setSearchParams(params, { replace: true });
        }

    }, [mode, role, roomCode, familyName, customImage]);

    // React to URL changes for Personalization (e.g. if user manually changes URL)
    useEffect(() => {
        const urlFamily = searchParams.get('familyName');
        const urlImage = searchParams.get('image');

        if (urlFamily && urlFamily !== familyName) {
            setFamilyName(urlFamily);
        }
        if (urlImage && urlImage !== customImage) {
            setCustomImage(urlImage);
        }
    }, [searchParams]);

    // Track last synced view to allow local navigation freedom
    const lastHostView = useRef(null);

    // Subscriptions
    useEffect(() => {
        if (mode === 'group' && roomCode) {
            const unsubscribe = roomService.subscribeToRoom(roomCode, (data) => {
                setSyncedState(data);

                // If I am a GUEST, I should follow the host ONLY if host changed view
                if (role === 'guest' && data.currentView) {
                    const targetHostView = data.currentView;

                    // If the HOST location has changed since we last synced
                    if (targetHostView !== lastHostView.current) {
                        lastHostView.current = targetHostView;

                        const currentPath = window.location.pathname;
                        const targetPath = targetHostView.split('?')[0];

                        // Navigate if we aren't already there
                        if (targetPath !== currentPath) {
                            console.log(`[Guest] Host moved to ${targetHostView}, syncing...`);
                            setIsSyncing(true);

                            // Preserve my role/room params
                            const myParams = new URLSearchParams(window.location.search);
                            if (roomCode) myParams.set('room', roomCode);
                            if (role) myParams.set('role', role);

                            navigate(`${targetPath}?${myParams.toString()}`);
                        }
                    }
                }
            });

            return () => unsubscribe();
        }
    }, [mode, roomCode, role, navigate]); // Removed location dependency

    // Host Logic: Listen to local navigation and update DB
    useEffect(() => {
        if (role === 'host' && mode === 'group' && roomCode) {
            const currentPath = location.pathname;
            const lastSyncedPath = syncedState?.currentView?.split('?')[0];

            if (lastSyncedPath !== currentPath) {
                console.log(`[Host] Updating room path to: ${currentPath}`);
                roomService.updateRoomState(roomCode, {
                    currentView: currentPath,
                    viewData: null
                });
            }
        }
    }, [location, role, mode, roomCode]); // Depend on location changes

    // Helper for views to update their specific state
    const updateViewData = (data) => {
        if (role === 'host' && mode === 'group' && roomCode) {
            roomService.updateRoomState(roomCode, {
                viewData: { ...syncedState?.viewData, ...data }
            });
        }
    };

    return (
        <NovenaContext.Provider value={{
            mode,
            role,
            roomCode,
            syncedState,
            startGroup,
            joinGroup,
            leaveGroup,
            updateViewData,
            customization: { familyName, customImage }
        }}>
            {children}
        </NovenaContext.Provider>
    );
}

export function useNovena() {
    return useContext(NovenaContext);
}
