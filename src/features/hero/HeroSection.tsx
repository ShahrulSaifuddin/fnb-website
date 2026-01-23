import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1920&q=80"
                    alt="Fresh delicious food"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Dimmer overlay */}
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 md:px-12 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-md">
                        Kafe Komuniti
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight"
                >
                    Dayang <span className="text-primary italic">Café</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto italic"
                >
                    "Kafe komuniti yang menyajikan makanan panas, mee, nasi goreng dan minuman pada harga mampu milik."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button size="lg" className="group">
                        View Menu <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-primary border-white hover:bg-white hover:text-black">
                        Book a Table
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
