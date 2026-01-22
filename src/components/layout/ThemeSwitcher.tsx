import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';

export function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, customColors, setCustomColors } = useTheme();

    const presets = ['orange', 'red', 'green', 'blue', 'purple'];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-24 right-0 z-40 bg-background shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-2 rounded-l-md border-l border-t border-b hover:bg-secondary transition-colors"
            >
                <Settings size={20} className="text-primary animate-spin-slow" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-background border-l shadow-2xl p-6 overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-bold">Theme Settings</h3>
                                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-secondary rounded-full">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-medium mb-3 text-muted-foreground">Preset Colors</h4>
                                    <div className="grid grid-cols-5 gap-2">
                                        {presets.map((color) => (
                                            <button
                                                key={color}
                                                onClick={() => setTheme(color as any)}
                                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${theme === color ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
                                                style={{ backgroundColor: `var(--color-${color})` }} // Simplified, in reality would map
                                            >
                                                {/* We can't easily access CSS vars here directly for style without a map, so let's mock the visual */}
                                                <div className={`w-full h-full rounded-full bg-${color}-500`} />
                                                {theme === color && <Check size={16} className="text-white absolute" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium mb-3 text-muted-foreground">Custom Color</h4>
                                    <div className="space-y-3">
                                        <label className="block">
                                            <span className="text-xs mb-1 block">Primary Color</span>
                                            <input
                                                type="color"
                                                value={customColors.primary}
                                                onChange={(e) => {
                                                    setCustomColors({ ...customColors, primary: e.target.value });
                                                    setTheme('custom');
                                                }}
                                                className="w-full h-10 rounded cursor-pointer"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-xs mb-1 block">Accent Color</span>
                                            <input
                                                type="color"
                                                value={customColors.accent}
                                                onChange={(e) => {
                                                    setCustomColors({ ...customColors, accent: e.target.value });
                                                    setTheme('custom');
                                                }}
                                                className="w-full h-10 rounded cursor-pointer"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-6 border-t">
                                    <p className="text-xs text-muted-foreground mb-4">
                                        Changes are saved automatically to your browser storage.
                                    </p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                        onClick={() => {
                                            setTheme('orange');
                                            setCustomColors({ primary: '#f97316', accent: '#fb923c' });
                                        }}
                                    >
                                        Reset to Default
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
