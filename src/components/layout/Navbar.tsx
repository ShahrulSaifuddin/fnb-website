import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import { ToggleTheme } from "../ui/toggle-theme";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Promos", href: "#promos" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-enhanced py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={cn(
            "text-2xl font-bold font-serif tracking-tighter flex items-center gap-2 transition-colors",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
          <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center">
            D
          </span>
          <span>
            Dayang <span className="text-primary">Café</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors relative group",
                scrolled
                  ? "text-foreground"
                  : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/60194411878"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent",
              !scrolled &&
                "text-white hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
            )}
          >
            <Phone size={18} />
            <span>Call Us</span>
          </a>
          <Button size="sm" className="gap-2">
            <ShoppingBag size={18} />
            Order Now
          </Button>
          <ToggleTheme />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            scrolled
              ? "text-foreground"
              : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-enhanced border-b"
          >
            <div className="container px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <Button className="w-full justify-center">Order Now</Button>
                <Button variant="outline" className="w-full justify-center">
                  Call Us
                </Button>
                <div className="flex justify-center pt-2">
                  <ToggleTheme />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
