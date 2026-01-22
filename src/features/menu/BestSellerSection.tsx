import { motion } from 'framer-motion';
import { Star, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { MENU_ITEMS } from '../../data/mockData';

export function BestSellerSection() {
    const bestSellers = MENU_ITEMS.filter(item => item.bestseller).slice(0, 3);

    return (
        <section className="py-20 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Our <span className="text-primary">Best Sellers</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover the dishes that keep our customers coming back for more.
                        Crafted with perfection and love.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bestSellers.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <Card className="overflow-hidden group h-full flex flex-col border-none shadow-lg">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                                        <Star size={12} fill="black" /> BEST SELLER
                                    </div>
                                    <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                                        <Plus size={24} />
                                    </button>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold font-serif">{item.name}</h3>
                                        <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-6 flex-1">{item.description}</p>
                                    <Button className="w-full" variant="outline">Add to Cart</Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
