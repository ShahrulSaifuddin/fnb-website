import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { MENU_ITEMS } from '../../data/mockData';

const categories = ["All", "Food", "Drinks", "Desserts"];

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredItems = MENU_ITEMS.filter(item => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="menu" className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Our <span className="text-primary">Menu</span></h2>
                        <p className="text-muted-foreground">Fresh ingredients, specially curated for you.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input
                                type="text"
                                placeholder="Search menu..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-full border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex gap-4 group">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-md">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-lg font-serif">{item.name}</h3>
                                                <span className="font-bold text-primary font-mono">${item.price.toFixed(2)}</span>
                                            </div>
                                            <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                                        </div>
                                        {item.tags.length > 0 && (
                                            <div className="flex gap-2 mt-2">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-secondary rounded text-secondary-foreground">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-6 border-b border-border/50 border-dashed" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <p>No items found matching your criteria.</p>
                        <Button variant="ghost" className="mt-4" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
