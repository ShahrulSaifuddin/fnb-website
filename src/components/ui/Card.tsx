import React, { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { cn } from "../../lib/utils";

// Re-export Card component to maintain backward compatibility if other files import 'Card'
export const Card = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export interface Product {
  id: string | number;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  inStock: boolean;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (
    productId: string | number,
    isWishlisted: boolean,
  ) => void;
}

export const ProductCard = ({
  product,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) => {
  // We use standard Tailwind dark: modifiers for theming, so isDark state is not strictly needed for class logic here.
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(product.id, !isWishlisted);
  };

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  // Constructing classes to match the design requested
  // Using Tailwind `dark:` variants for automatic theme switching support.

  return (
    <div
      className={cn(
        "max-w-full mx-auto rounded-xl border shadow-sm md:shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform md:hover:scale-[1.02]",
        "bg-card text-card-foreground border-border",
        "flex flex-row h-full items-stretch",
      )}
    >
      {/* Image Container */}
      <div className="relative w-[140px] sm:w-[160px] md:w-[180px] shrink-0 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0"
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={cn(
            "absolute top-2 right-2 md:top-3 md:right-3 p-1.5 md:p-2 rounded-full transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm z-10",
            "bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground",
            isWishlisted && "text-red-500 hover:text-red-600",
          )}
        >
          <Heart
            size={16}
            className="md:w-4 md:h-4"
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>

        {/* Sale Badge */}
        {product.salePrice && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-destructive text-destructive-foreground px-2 py-1 md:px-2.5 md:py-1 rounded-full text-[10px] md:text-xs font-bold shadow-lg z-10">
            -
            {Math.round(
              ((product.price - product.salePrice) / product.price) * 100,
            )}
            %
          </div>
        )}

        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
            <span className="bg-destructive text-destructive-foreground px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-semibold text-center">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 md:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Category */}
          <p className="text-[10px] md:text-xs uppercase tracking-wider font-semibold mb-1 md:mb-1.5 text-muted-foreground">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 leading-tight line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2 md:mb-3 hidden sm:flex">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={cn(
                    "w-3 h-3 md:w-3.5 md:h-3.5",
                    i < Math.floor(product.rating || 0)
                      ? "text-yellow-400 fill-current"
                      : "text-muted-foreground/30",
                  )}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {product.rating || 4.5} ({product.reviews || 10})
            </span>
          </div>
        </div>

        <div>
          {/* Price */}
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="flex items-baseline gap-1.5 md:gap-2">
              {product.salePrice ? (
                <>
                  <span className="text-sm md:text-xl font-bold text-destructive">
                    RM {product.salePrice.toFixed(2)}
                  </span>
                  <span className="text-xs md:text-sm line-through text-muted-foreground">
                    RM {product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-sm md:text-xl font-bold text-primary">
                  RM {product.price.toFixed(2)}
                </span>
              )}
            </div>

            {product.inStock && (
              <span className="hidden sm:inline-block text-[10px] md:text-xs text-green-600 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                In Stock
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={cn(
              "w-full py-2 md:py-2.5 px-3 md:px-4 rounded-lg md:rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-primary-foreground text-xs md:text-sm",
              product.inStock
                ? "bg-primary hover:bg-primary/90 hover:shadow-lg active:scale-95 transform"
                : "bg-muted text-muted-foreground cursor-not-allowed",
            )}
          >
            <ShoppingCart size={16} className="w-4 h-4" />
            <span>{product.inStock ? "Add" : "No Stock"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
