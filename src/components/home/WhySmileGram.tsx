import ScrollReveal from "@/components/ScrollReveal";
import { Shield, Cpu, FileText, Palette, Users, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Comfort-First Approach",
    desc: "We use gentle techniques and take extra time to ensure every visit feels calm, safe, and pain-free.",
    highlight: "Zero-pressure consultations",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "Digital scanners, 3D imaging, and precision tools for faster, more accurate treatments.",
    highlight: "Digital-first workflow",
  },
  {
    icon: FileText,
    title: "Transparent Plans & Pricing",
    desc: "No hidden fees, no surprises. You'll always know your options, costs, and timeline upfront.",
    highlight: "Clear cost breakdowns",
  },
  {
    icon: Palette,
    title: "Aesthetic Excellence",
    desc: "Every treatment is designed with your smile's appearance in mind — because results should look natural.",
    highlight: "Smile design expertise",
  },
  {
    icon: Users,
    title: "All Ages Welcome",
    desc: "From kids' first check-ups to adult smile makeovers — we treat every family member with care.",
    highlight: "Family-friendly clinic",
  },
  {
    icon: MapPin,
    title: "Convenient PJ Location",
    desc: "Located in the heart of Petaling Jaya with easy parking and accessible public transport links.",
    highlight: "Central & accessible",
  },
];

const WhySmileGram = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-wide relative">
        <ScrollReveal>
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="label-caps text-accent mb-4 block tracking-[0.25em]">The SmileGram Difference</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Why Patients <span className="italic">Choose Us</span>
            </h2>
            <p className="font-body text-base opacity-60 leading-relaxed">
              We're not just another dental clinic. Here's what makes SmileGram the preferred choice 
              for families across Petaling Jaya.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.08}>
              <div className="group p-8 rounded-sm border border-primary-foreground/8 hover:border-accent/30 transition-all duration-300 hover:bg-primary-foreground/5 h-full">
                <div className="flex items-start justify-between mb-5">
                  <r.icon className="w-6 h-6 text-accent" />
                  <span className="font-body text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded-sm">
                    {r.highlight}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{r.title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-60">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySmileGram;
