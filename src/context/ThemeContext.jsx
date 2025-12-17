
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('normal');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('dark', 'night-mode', 'high-contrast');
        document.body.classList.remove('night-mode', 'high-contrast');

        if (theme === 'night') {
            document.documentElement.classList.add('dark'); // For Tailwind
            document.body.classList.add('night-mode'); // For legacy overlap if any
        } else if (theme === 'high-contrast') {
            document.body.classList.add('high-contrast');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
