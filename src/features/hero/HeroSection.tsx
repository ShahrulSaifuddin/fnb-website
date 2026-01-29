import { useEffect } from "react";
import ScrollExpandMedia from "../../components/ui/scroll-expansion-hero";
// import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  // Ensure we start at the top for the effect to work properly
  useEffect(() => {
    // We dispath a reset event or just scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black">
      <ScrollExpandMedia
        mediaType="image"
        // Using a high quality food image for the expanded view
        mediaSrc="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1920&q=80"
        // Using the same or different image for background
        bgImageSrc="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1920&q=80"
        title="Dayang Café"
        date="Kafe Kampus"
        scrollToExpand="Scroll to Explore"
      >
        <div className="max-w-4xl mx-auto text-center text-white pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-blue-200">
              Authentic Flavors at Campus
            </h3>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              "Kafe kampus yang menyajikan masakan panas (mee, nasi goreng dan
              lain-lain), makanan lain seperti nasi kerabu, nasi dagang, nasi
              lemak, nasi hujan panas."
            </p>

            <a
              href="#menu"
              className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white transition-all duration-300"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
