import { TEAM_MEMBERS } from "../../data/mockData";
import { ImageAccordion } from "../../components/ui/interactive-image-accordion";

export function OrgChart() {
  // Transform TEAM_MEMBERS to match AccordionItem interface
  const accordionItems = TEAM_MEMBERS.map((member, index) => ({
    id: index,
    title: member.name + " - " + member.role, // Combining name and role for the label
    imageUrl: member.image,
  }));

  return (
    <section className="py-20 glass-section bg-black text-white">
      <div className="container px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-16 text-center">
          Meet the <span className="text-primary italic">Team</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/3 text-center lg:text-left space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              Passion on a Plate, <br />
              <span className="text-primary">Served with a Smile.</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Behind every delicious meal is a dedicated team of chefs,
              baristas, and servers working in harmony. We take pride in
              delivering not just food, but an unforgettable dining experience.
            </p>
            <div className="pt-4">
              <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20">
                Join Our Family
              </button>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-2/3">
            <ImageAccordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
