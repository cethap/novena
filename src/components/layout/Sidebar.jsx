
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Heart, BookOpen, Star, Hammer, Smile, Gift, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Sidebar({ isOpen, onClose }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();

    // Close mobile sidebar on route change
    useEffect(() => {
        if (window.innerWidth < 768) {
            onClose();
        }
    }, [location.pathname]);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const linkClasses = ({ isActive }) => `
        flex items-center px-6 py-4 transition-colors relative text-lg
        ${isActive ? 'bg-red-700 text-white active font-bold' : 'hover:bg-green-800 text-green-100'}
    `;

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>

            {/* Sidebar Element */}
            <aside
                className={`
                    fixed md:sticky top-0 h-screen z-30 bg-green-900 text-white flex flex-col 
                    transition-all duration-300 border-r-4 border-yellow-500
                    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    ${isExpanded ? 'w-64' : 'w-64 md:w-20'}
                `}
            >
                {/* Header / Toggle */}
                <div className="p-4 border-b border-green-800 bg-green-950 flex items-center justify-between h-16 shrink-0">
                    <h1 className={`text-xl font-bold text-yellow-400 serif truncate transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-100 md:opacity-0 hidden md:block'}`}>
                        Novena
                    </h1>
                    {/* Mobile Close Button */}
                    <button onClick={onClose} className="md:hidden text-yellow-400">
                        <ChevronLeft size={24} />
                    </button>
                    {/* Desktop Expand Button */}
                    <button onClick={toggleExpand} className="hidden md:block text-yellow-400 hover:text-yellow-200 mx-auto">
                        {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4 custom-scrollbar flex flex-col">
                    <NavLink to="/" className={linkClasses} title={!isExpanded ? 'Inicio' : ''}>
                        {/* Inicio Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'md:opacity-0 md:w-0'}`}>
                            Inicio / Orden
                        </span>
                    </NavLink>

                    <div className={`px-6 py-2 text-xs font-semibold text-green-300 uppercase tracking-wider mt-4 whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100' : 'md:opacity-0 hidden md:block'}`}>
                        Oraciones Diarias
                    </div>

                    <NavLink to="/todos-dias" className={linkClasses} title={!isExpanded ? 'Todos los Días' : ''}>
                        {/* Heart Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                        </svg>
                        <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'md:opacity-0 md:w-0'}`}>
                            Todos los Días
                        </span>
                    </NavLink>

                    <NavLink to="/consideraciones" className={linkClasses} title={!isExpanded ? 'Consideraciones' : ''}>
                        {/* Book Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <path d="M3 10h18" />
                            <path d="M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                        </svg>
                        <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'md:opacity-0 md:w-0'}`}>
                            Consideraciones
                        </span>
                    </NavLink>

                    <NavLink to="/virgen" className={linkClasses} title={!isExpanded ? 'A la Virgen' : ''}>
                        {/* Star/Virgin Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'md:opacity-0 md:w-0'}`}>
                            A la Virgen
                        </span>
                    </NavLink>

                    <NavLink to="/san-jose" className={linkClasses} title={!isExpanded ? 'A San José' : ''}>
                        {/* Hammer Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                            <path d="M17.64 15 22 10.64" />
                            <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V7h-3.25c-.85 0-1.65-.33-2.25-.93L12 4.86" />
                        </svg>
                        <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'md:opacity-0 md:w-0'}`}>
                            A San José
                        </span>
                    </NavLink>

                    <NavLink to="/gozos" className={linkClasses} title={!isExpanded ? 'Gozos' : ''}>
                        {/* Smile/Gozos Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'md:opacity-0 md:w-0'}`}>
                            Gozos
                        </span>
                    </NavLink>

                    <NavLink to="/nino" className={linkClasses} title={!isExpanded ? 'Niño Jesús' : ''}>
                        {/* Gift/Child Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'md:opacity-0 md:w-0'}`}>
                            Niño Jesús
                        </span>
                    </NavLink>

                    <NavLink to="/villancicos" className={linkClasses} title={!isExpanded ? 'Villancicos' : ''}>
                        {/* Music Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18V5l12-2v13" />
                            <circle cx="6" cy="18" r="3" />
                            <circle cx="18" cy="16" r="3" />
                        </svg>
                        <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'md:opacity-0 md:w-0'}`}>
                            Villancicos
                        </span>
                    </NavLink>
                </nav>

                {/* Footer / Theme */}
                <div className="p-4 border-t border-green-800 bg-green-950 shrink-0">
                    <div className={`text-xs font-bold text-green-300 uppercase tracking-wider mb-3 transition-opacity ${isExpanded ? 'opacity-100 block' : 'opacity-0 hidden md:hidden'}`}>
                        Apariencia
                    </div>
                    <ThemeToggle isMobile={!isExpanded && window.innerWidth >= 768 ? false : true} showLabels={isExpanded} />
                </div>
            </aside>
        </>
    );
}
