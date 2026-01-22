import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'custom';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    customColors: { primary: string; accent: string };
    setCustomColors: (colors: { primary: string; accent: string }) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('fnb-theme') as Theme) || 'orange';
    });

    const [customColors, setCustomColors] = useState(() => {
        const saved = localStorage.getItem('fnb-custom-colors');
        return saved ? JSON.parse(saved) : { primary: '#f97316', accent: '#fb923c' };
    });

    useEffect(() => {
        const root = window.document.documentElement;
        localStorage.setItem('fnb-theme', theme);

        // Reset any existing theme classes
        root.classList.remove('theme-orange', 'theme-red', 'theme-green', 'theme-blue', 'theme-purple');

        if (theme === 'custom') {
            root.style.setProperty('--primary', hexToRgb(customColors.primary));
            root.style.setProperty('--accent', hexToRgb(customColors.accent));
            // Derived foregrounds easier to keep simple white/black for now or complex calculation
            // For this demo, we assume relatively dark primary/accent
        } else {
            root.classList.add(`theme-${theme}`);
            // Clear custom styles
            root.style.removeProperty('--primary');
            root.style.removeProperty('--accent');
        }

    }, [theme, customColors]);

    useEffect(() => {
        localStorage.setItem('fnb-custom-colors', JSON.stringify(customColors));
    }, [customColors]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, customColors, setCustomColors }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};

// Helper to convert hex to space-separated RGB for Tailwind
function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
        : '0 0 0';
}
