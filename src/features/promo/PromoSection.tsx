import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { PROMOTIONS } from "../../data/mockData";

export function PromoSection() {
  return (
    <section id="promos" className="py-20 md:py-32 glass-section">
      <div className="container px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-12 text-center">
          Special <span className="text-primary">Promotions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROMOTIONS.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, margin: "-100px" }}
              className="relative overflow-hidden rounded-3xl h-[400px] md:h-[300px] group shadow-xl"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center text-white transition-all duration-500 hover:backdrop-blur-none hover:bg-black/60">
                <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
                  <Calendar size={16} />
                  <span>{promo.validity}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-serif">
                  {promo.title}
                </h3>
                <p className="text-gray-200 mb-6 max-w-md">
                  {promo.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="glass px-4 py-2 rounded-lg text-sm font-mono flex items-center gap-2">
                    <Tag size={14} />
                    {promo.code}
                  </div>
                  <Button
                    size="sm"
                    className="glass-btn bg-white/90 text-black hover:bg-white hover:scale-105"
                  >
                    Claim Offer
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
