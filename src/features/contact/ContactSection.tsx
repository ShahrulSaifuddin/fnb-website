import { MapPin, Phone, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 glass-section">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Have a question or want to make a reservation? Reach out to us
              directly or fill out the form.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    UTM
                    <br />
                    Jalan Semarak
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Mon - Fri: 7:00 AM - 5:00 PM
                    <br />
                    Sat - Sun:{" "}
                    <span className="text-red-500 font-medium">Closed</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-btn bg-primary/10 border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Contact Info</h3>
                  <p className="text-muted-foreground">
                    0194411878
                    <br />
                    sbm81@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/60194411878"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium glass-btn rounded-lg transition-transform hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map / Image Placeholder */}
          <div className="h-[400px] lg:h-[600px] glass-card p-4 shadow-xl rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps?q=UTC%20Shah%20Alam&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Map"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
