import { ShoppingCart, X, Plus, Minus, Send } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Cart() {
    const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const sendToWhatsApp = () => {
        if (items.length === 0) return;

        // Format the order message
        let message = '*Pesanan Dayang Café*\n\n';

        items.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`;
            message += `   Kuantiti: ${item.quantity}\n`;
            message += `   Harga: RM ${item.price.toFixed(2)} x ${item.quantity} = RM ${(item.price * item.quantity).toFixed(2)}\n\n`;
        });

        message += `*Jumlah Keseluruhan: RM ${totalPrice.toFixed(2)}*\n\n`;
        message += 'Terima kasih! 🙏';

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp with the message
        window.open(`https://wa.me/60194411878?text=${encodedMessage}`, '_blank');

        // Optionally clear cart after sending
        // clearCart();
    };

    return (
        <>
            {/* Cart Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-6 z-40 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
            >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </button>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background shadow-2xl z-50 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b">
                                <h2 className="text-2xl font-bold">Troli Anda</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-secondary rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {items.length === 0 ? (
                                    <div className="text-center text-muted-foreground py-12">
                                        <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                                        <p>Troli anda kosong</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {items.map((item) => (
                                            <div key={item.id} className="bg-secondary/30 rounded-lg p-4">
                                                <div className="flex gap-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-20 h-20 object-cover rounded-lg"
                                                    />
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold mb-1">{item.name}</h3>
                                                        <p className="text-primary font-bold">RM {item.price.toFixed(2)}</p>

                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-1 bg-background rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                                                            >
                                                                <Minus size={16} />
                                                            </button>
                                                            <span className="font-medium w-8 text-center">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-1 bg-background rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                                                            >
                                                                <Plus size={16} />
                                                            </button>
                                                            <button
                                                                onClick={() => removeItem(item.id)}
                                                                className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                                                            >
                                                                <X size={20} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-2 text-right text-sm text-muted-foreground">
                                                    Subtotal: <span className="font-bold text-foreground">RM {(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="border-t p-6 space-y-4">
                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <span>Jumlah:</span>
                                        <span className="text-primary text-2xl">RM {totalPrice.toFixed(2)}</span>
                                    </div>

                                    <button
                                        onClick={sendToWhatsApp}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <Send size={20} />
                                        Hantar ke WhatsApp
                                    </button>

                                    <button
                                        onClick={clearCart}
                                        className="w-full bg-secondary hover:bg-secondary/80 text-foreground font-medium py-3 rounded-lg transition-colors"
                                    >
                                        Kosongkan Troli
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
