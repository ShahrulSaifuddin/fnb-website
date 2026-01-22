import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data/mockData';

export function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className="py-20 bg-secondary/20">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold font-serif mb-12 text-center">Grand <span className="text-primary">Gallery</span></h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {GALLERY_IMAGES.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-md ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                            onClick={() => setSelectedImage(src)}
                        >
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                <ZoomIn className="text-white drop-shadow-lg" size={32} />
                            </div>
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover aspect-square md:aspect-auto min-h-[200px] transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selectedImage}
                            alt="Gallery Preview"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
