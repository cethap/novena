import { createContext, useContext, useState, useEffect } from 'react';
import { roomService } from '../services/roomService';
import { useNavigate, useLocation } from 'react-router-dom';

const NovenaContext = createContext();

export function NovenaProvider({ children }) {
    const [mode, setMode] = useState('normal'); // 'normal' | 'group'
    const [role, setRole] = useState(null); // 'host' | 'guest'
    const [roomCode, setRoomCode] = useState(null);
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
        navigate('/');
    };

    // Subscriptions
    useEffect(() => {
        if (mode === 'group' && roomCode) {
            const unsubscribe = roomService.subscribeToRoom(roomCode, (data) => {
                setSyncedState(data);

                // If I am a GUEST, I should follow the host
                if (role === 'guest' && data.currentView) {
                    // Only navigate if we are not already there
                    // We check pathname + search to match exactly
                    const target = data.currentView;
                    const currentPath = location.pathname + location.search;

                    if (target !== currentPath) {
                        console.log(`[Guest] Syncing to: ${target}`);
                        setIsSyncing(true);
                        navigate(target);
                    }
                }
            });

            return () => unsubscribe();
        }
    }, [mode, roomCode, role, navigate, location.pathname, location.search]);

    // Host Logic: Listen to local navigation and update DB
    useEffect(() => {
        if (role === 'host' && mode === 'group' && roomCode) {
            const currentPath = location.pathname + location.search;

            // Only update if path changed, preserve existing viewData unless explicitly changed via updateViewData
            if (syncedState?.currentView !== currentPath) {
                console.log(`[Host] Updating room path to: ${currentPath}`);
                roomService.updateRoomState(roomCode, {
                    currentView: currentPath,
                    viewData: null // Reset view data on navigation change
                });
            }
        }
    }, [location, role, mode, roomCode]); // Depend on location changes

    // Helper for views to update their specific state (e.g. active slide)
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
            syncedState, // Expose full synced state to consumers
            startGroup,
            joinGroup,
            leaveGroup,
            updateViewData
        }}>
            {children}
        </NovenaContext.Provider>
    );
}

export function useNovena() {
    return useContext(NovenaContext);
}
