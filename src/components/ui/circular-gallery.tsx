import React, { useState, useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import type { PanInfo } from "framer-motion";

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

// Define the props for the CircularGallery component
interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not interacting. */
  autoRotateSpeed?: number;
  /** Sensitivity of the drag rotation. */
  dragSensitivity?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 600,
      autoRotateSpeed = 0.05,
      dragSensitivity = 0.5,
      ...props
    },
    ref,
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const animationFrameRef = useRef<number | null>(null);

    // Effect for auto-rotation when not interacting
    useEffect(() => {
      const autoRotate = () => {
        if (!isDragging) {
          setRotation((prev) => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isDragging, autoRotateSpeed]);

    const handleDragStart = () => {
      setIsDragging(true);
    };

    const handleDrag = (_: any, info: PanInfo) => {
      // Just update rotation based on drag movement
      setRotation((prev) => prev + info.delta.x * dragSensitivity);
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden",
          className,
        )}
        style={{ perspective: "2000px" }}
        {...props}
      >
        {/*
            We use a motion.div as a transparent interactive layer to capture gestures.
            This avoids issues where dragging an image might try to drag the HTML element itself 
            instead of rotating the gallery.
         */}
        <motion.div
          className="absolute inset-0 z-20"
          onPan={handleDrag}
          onPanStart={handleDragStart}
          onPanEnd={handleDragEnd}
          style={{ touchAction: "pan-y" }} // Allow vertical scrolling but capture horizontal gestures
        />

        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            // Calculate normalized angle for opacity effects
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(
              relativeAngle > 180 ? 360 - relativeAngle : relativeAngle,
            );
            // Opacity calculation: closer to 0 deg is more visible
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180);

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute w-[280px] h-[360px] md:w-[300px] md:h-[400px] pointer-events-none transition-opacity duration-300"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-140px", // Half of width (mobile default)
                  marginTop: "-180px", // Half of height (mobile default)
                  opacity: opacity,
                  // We override margins for desktop via class if needed or use calc() in CSS,
                  // but simplest here is inline style recalculation or accept minor responsiveness deviation
                }}
              >
                {/* Inner card content */}
                <div className="relative w-full h-full rounded-xl shadow-2xl overflow-hidden group border border-border bg-card/70 dark:bg-card/30 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || "center" }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h2 className="text-xl font-bold">{item.common}</h2>
                    <em className="text-sm italic opacity-80">
                      {item.binomial}
                    </em>
                    <p className="text-xs mt-2 opacity-70">
                      Photo by: {item.photo.by}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
