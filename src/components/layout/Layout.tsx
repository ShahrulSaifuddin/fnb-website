import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeProvider } from '../../context/ThemeContext';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20">
                <Navbar />
                <main className="flex-1 pt-0">
                    {children}
                </main>
                <Footer />
                <ThemeSwitcher />
            </div>
        </ThemeProvider>
    );
}
