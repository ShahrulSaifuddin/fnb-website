
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function ContactSection() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-secondary/30">
            <div className="container px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">Get in <span className="text-primary">Touch</span></h2>
                        <p className="text-muted-foreground mb-12 text-lg">
                            Have a question or want to make a reservation? Reach out to us directly or fill out the form.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">123 Gourmet Street<br />Foodie City, FC 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                                    <p className="text-muted-foreground">Mon - Fri: 7:00 AM - 5:00 PM<br />Sat - Sun: <span className="text-red-500 font-medium">Closed</span></p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Contact Info</h3>
                                    <p className="text-muted-foreground">+1 (555) 123-4567<br />hello@flavorfusion.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <Button size="lg" className="w-full sm:w-auto">Book a Table</Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto">WhatsApp</Button>
                        </div>
                    </div>

                    {/* Map / Image Placeholder */}
                    <div className="h-[400px] lg:h-[600px] bg-background rounded-2xl p-4 shadow-xl rotate-1 lg:rotate-2">
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
