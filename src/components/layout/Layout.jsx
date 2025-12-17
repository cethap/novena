import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import SnowEffect from './SnowEffect';
import { useNovena } from '../../context/NovenaContext';

function GroupStatusIndicator() {
    const { mode, role, roomCode, leaveGroup } = useNovena();

    if (mode !== 'group') return null;

    return (
        <div className="bg-christmas-green text-white px-4 py-2 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-2">
                <span className="animate-pulse w-2 h-2 rounded-full bg-red-500 border border-white"></span>
                <span className="font-bold text-sm">
                    {role === 'host' ? 'Transmitiendo' : 'Sincronizado'}: {roomCode}
                </span>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => {
                        const url = `${window.location.origin}/lobby?code=${roomCode}`;
                        navigator.clipboard.writeText(url);
                        alert('¡Enlace copiado! Compártelo con tu grupo.');
                    }}
                    className="text-xs bg-white text-christmas-green hover:bg-green-100 px-3 py-1 rounded-full transition-colors mr-2 font-bold flex items-center"
                >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                    Invitar
                </button>
                <button
                    onClick={leaveGroup}
                    className="text-xs bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full transition-colors"
                >
                    Salir
                </button>
            </div>
        </div>
    );
}

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen text-gray-800">
            <SnowEffect />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 flex flex-col relative w-full">
                <Header onMenuClick={() => setSidebarOpen(true)} />

                {/* Group Mode Indicator */}
                <GroupStatusIndicator />

                <div className="flex-1 p-4 md:p-8 lg:p-12 pb-24 max-w-4xl mx-auto w-full">
                    <Outlet />
                </div>

                {/* Watermark */}
                <div className="fixed bottom-1 right-2 md:bottom-2 md:right-4 z-10 pointer-events-none opacity-60">
                    <p className="text-[10px] md:text-xs text-gray-500 font-serif italic text-shadow-sm">
                        Hecho con amor por la familia Tapasco Zuñiga
                    </p>
                </div>
            </main>
        </div>
    );
}
