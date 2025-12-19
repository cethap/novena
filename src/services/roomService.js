import { ref, set, get, child, onValue, update } from 'firebase/database';
import { db } from './firebase';

// Helper to generate a random 6-digit code
const generateRoomCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const roomService = {
    /**
     * Creates a new room and returns the code.
     * The creator is automatically the host.
     */
    createRoom: async () => {
        const roomCode = generateRoomCode();
        const roomRef = ref(db, `rooms/${roomCode}`);

        // Check if room already exists (unlikely but possible)
        const snapshot = await get(roomRef);
        if (snapshot.exists()) {
            return roomService.createRoom(); // Retry
        }

        const initialState = {
            host: 'connected', // Could be a user ID
            currentView: '/', // Default start
            timestamp: Date.now(),
            status: 'waiting'
        };

        await set(roomRef, initialState);
        return roomCode;
    },

    /**
     * Checks if a room exists.
     * @param {string} roomCode 
     * @returns {boolean}
     */
    joinRoom: async (roomCode) => {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `rooms/${roomCode}`));
        return snapshot.exists();
    },

    /**
     * Subscribes to changes in a specific room.
     * @param {string} roomCode 
     * @param {function} callback 
     * @returns {function} Unsubscribe function
     */
    subscribeToRoom: (roomCode, callback) => {
        const roomRef = ref(db, `rooms/${roomCode}`);
        return onValue(roomRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                callback(data);
            }
        });
    },

    /**
     * Updates the shared state of the room (Host only should call this).
     * @param {string} roomCode 
     * @param {object} newState Partial state to update (e.g., { currentView: '/gozos' })
     */
    updateRoomState: async (roomCode, newState) => {
        const roomRef = ref(db, `rooms/${roomCode}`);
        await update(roomRef, {
            ...newState,
            timestamp: Date.now()
        });
    }
};
