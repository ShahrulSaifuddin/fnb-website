import { CircularGallery } from "../../components/ui/circular-gallery";
import type { GalleryItem } from "../../components/ui/circular-gallery";
import { GALLERY_IMAGES } from "../../data/mockData";
import { useState, useEffect } from "react";

// Transform the simple string array into the required GalleryItem objects
const galleryData: GalleryItem[] = GALLERY_IMAGES.map((url, index) => ({
  common: `Delicacy ${index + 1}`,
  binomial: "Dayang Café Special",
  photo: {
    url: url,
    text: `Delicious food item ${index + 1} curated for our customers`,
    by: "Dayang Café Collection",
  },
}));

export function GallerySection() {
  const [radius, setRadius] = useState(800);

  // Responsive radius for mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(400); // Smaller radius for mobile
      } else {
        setRadius(800);
      }
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Changed height to 100vh for a contained section instead of scroll-dependant
    <div className="relative bg-black h-[100dvh] pt-16 md:pt-20 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-8 left-0 w-full z-10 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-2">
          Grand <span className="text-primary italic">Gallery</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          Drag to explore our delicacies
        </p>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <CircularGallery
          items={galleryData}
          radius={radius}
          dragSensitivity={0.3}
        />
      </div>
    </div>
  );
}
