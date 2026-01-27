import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        className={cn(
          "relative overflow-hidden inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md",
          {
            "glass-btn bg-primary/90 text-primary-foreground hover:bg-primary hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] border-white/20":
              variant === "primary",
            "glass-btn bg-white/10 text-foreground hover:bg-white/20 border-white/30":
              variant === "secondary",
            "glass-btn border-2 border-white/50 bg-transparent hover:bg-white/10 text-foreground":
              variant === "outline",
            "hover:bg-white/10 hover:text-foreground": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className,
        )}
        {...(props as any)}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
