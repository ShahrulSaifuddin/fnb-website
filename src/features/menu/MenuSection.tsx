import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { MENU_ITEMS } from "../../data/mockData";
import { useCart } from "../../contexts/CartContext";
import { ProductCard } from "../../components/ui/Card";

const categories = [
  "Semua",
  "Sarapan",
  "Nasi & Lauk",
  "Mee & Bihun",
  "Grab & Go",
  "Western",
  "Minuman",
  "Pencuci Mulut",
];
const ITEMS_PER_PAGE = 6;

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE);
  const { addItem } = useCart();

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "Semua" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedItems = filteredItems.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredItems.length;

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setItemsToShow(ITEMS_PER_PAGE); // Reset to initial count when changing category
  };

  return (
    <section id="menu" className="py-20 md:py-32 glass-section">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              Menu <span className="text-primary">Kami</span>
            </h2>
            <p className="text-muted-foreground">
              Hidangan segar, disediakan khas untuk anda.
            </p>
            <p className="text-xs text-muted-foreground/60 italic mt-2">
              * Gambar hanya sekadar hiasan/ilustrasi
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <input
                type="text"
                placeholder="Cari menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-full border glass-btn focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-12 overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6 md:-mx-12 md:px-12">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap glass-btn ${
                  activeCategory === category
                    ? "bg-primary/90 text-primary-foreground shadow-lg scale-105 border-primary/50"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  product={{
                    id: item.id,
                    name: item.name,
                    category: item.category,
                    price: item.price,
                    image: item.image,
                    description: item.description,
                    inStock: true, // Assuming true for now
                    rating: 4.5 + (Number(item.id) % 5) / 10, // Mock rating
                    reviews: 10 + Number(item.id) * 2, // Mock reviews
                  }}
                  onAddToCart={(p) => addItem({ ...item, id: String(p.id) })}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleLoadMore}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              Lihat Lagi <ChevronDown size={18} />
            </Button>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>Tiada item yang sepadan dengan kriteria anda.</p>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("Semua");
              }}
            >
              Kosongkan Penapis
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
