import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="glass-section pt-16 pb-8 border-t">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold font-serif">
              Dayang <span className="text-primary">Café</span>
            </div>
            <p className="text-muted-foreground italic text-sm">
              "Kafe kampus yang menyajikan makanan panas, mee, nasi goreng dan
              minuman pada harga mampu milik."
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 glass-btn rounded-full hover:text-primary transition-colors shadow-sm"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 glass-btn rounded-full hover:text-primary transition-colors shadow-sm"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 glass-btn rounded-full hover:text-primary transition-colors shadow-sm"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="shrink-0 text-primary" size={20} />
                <span>Dayang Café, Malaysia</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="shrink-0 text-primary" size={20} />
                <span>Contact via QR Pay</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="shrink-0 text-primary" size={20} />
                <span>Payment: Cash & QR Pay</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Fri</span> <span>7:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>{" "}
                <span className="text-red-500 font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dayang Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
