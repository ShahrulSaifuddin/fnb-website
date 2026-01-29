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
        "max-w-sm mx-auto rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:scale-[1.02]",
        "bg-card text-card-foreground border-border", // Uses theme variables for both light and dark mode
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={cn(
            "absolute top-4 right-4 p-2.5 rounded-full transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm",
            "bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground", // Thematic coloring
            isWishlisted && "text-red-500 hover:text-red-600",
          )}
        >
          <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Sale Badge */}
        {product.salePrice && (
          <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
            -
            {Math.round(
              ((product.price - product.salePrice) / product.price) * 100,
            )}
            %
          </div>
        )}

        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-xs uppercase tracking-wider font-semibold mb-2 text-muted-foreground">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-bold text-xl mb-3 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={cn(
                  i < Math.floor(product.rating || 0)
                    ? "text-yellow-400 fill-current"
                    : "text-muted-foreground/30",
                )}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {product.rating || 4.5} ({product.reviews || 10} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-baseline space-x-2">
            {product.salePrice ? (
              <>
                <span className="text-2xl font-bold text-destructive">
                  RM {product.salePrice.toFixed(2)}
                </span>
                <span className="text-lg line-through text-muted-foreground">
                  RM {product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-primary">
                RM {product.price.toFixed(2)}
              </span>
            )}
          </div>

          {product.inStock && (
            <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full whitespace-nowrap">
              In Stock
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={cn(
            "w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-primary-foreground",
            product.inStock
              ? "bg-primary hover:bg-primary/90 hover:shadow-lg active:scale-95 transform"
              : "bg-muted text-muted-foreground cursor-not-allowed",
          )}
        >
          <ShoppingCart size={20} />
          <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
        </button>
      </div>
    </div>
  );
};
