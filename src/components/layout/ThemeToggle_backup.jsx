import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ showLabels = false, isMobile = false }) {
    const { setTheme } = useTheme();

    const containerClasses = isMobile
        ? "flex items-center justify-around space-x-2 w-full"
        : showLabels
            ? "flex items-center justify-around space-x-2"
            : "flex flex-col space-y-2 items-center"; // Stack vertically when collapsed

    const btnClasses = "flex-1 flex flex-col items-center justify-center p-3 rounded-lg bg-green-900/50 hover:bg-green-800 border border-green-800 transition-all text-green-100";

    return (
        <div className={containerClasses}>
            <button
                onClick={() => setTheme('normal')}
                className={btnClasses}
                title="Normal"
            >
                <span className="text-2xl mb-1">☀️</span>
                {showLabels && <span className="text-xs font-semibold fade-in">Normal</span>}
            </button>
            <button
                onClick={() => setTheme('night')}
                className={btnClasses}
                title="Modo Noche"
            >
                <span className="text-2xl mb-1">🌙</span>
                {showLabels && <span className="text-xs font-semibold fade-in">Noche</span>}
            </button>
            <button
                onClick={() => setTheme('high-contrast')}
                className={btnClasses}
                title="Alto Contraste"
            >
                <span className="text-2xl mb-1">👁️</span>
                {showLabels && <span className="text-xs font-semibold fade-in">Alto C.</span>}
            </button>
        </div>
    );
}
