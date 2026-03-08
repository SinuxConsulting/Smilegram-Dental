import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BookingModal from "@/components/BookingModal";

const services = [
  {
    title: "Invisalign & Braces",
    benefit: "Straighten your smile discreetly with modern aligners or precision braces.",
    icon: "✦",
    tag: "Most Popular",
  },
  {
    title: "Teeth Whitening",
    benefit: "Professional-grade whitening for a brighter, more confident smile in one visit.",
    icon: "◇",
    tag: "Quick Results",
  },
  {
    title: "Veneers",
    benefit: "Custom porcelain veneers for a flawless, natural-looking smile transformation.",
    icon: "○",
    tag: "Smile Design",
  },
  {
    title: "Dental Implants",
    benefit: "Permanent tooth replacements that look, feel, and function like natural teeth.",
    icon: "△",
    tag: "Permanent",
  },
  {
    title: "Scaling & Polishing",
    benefit: "Thorough professional cleaning for healthier gums and a fresher smile.",
    icon: "□",
    tag: "Preventive",
  },
  {
    title: "Kids Dentistry",
    benefit: "Gentle, fun dental care designed to put young patients completely at ease.",
    icon: "☆",
    tag: "Family",
  },
];

const ServicesGrid = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="section-padding porcelain-bg">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
              <div>
                <span className="label-caps text-accent mb-4 block tracking-[0.25em]">What We Do</span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
                  Signature <span className="italic">Services</span>
                </h2>
              </div>
              <Link to="/services" className="btn-ghost text-accent">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <Link to="/services" className="card-service block group h-full relative">
                  {/* Tag */}
                  <span className="absolute top-4 right-4 font-body text-[9px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-sm">
                    {service.tag}
                  </span>

                  <span className="text-2xl text-accent mb-4 block">{service.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.benefit}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-xs font-medium text-accent group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA after services */}
          <ScrollReveal delay={0.5}>
            <div className="mt-12 text-center">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Not sure which treatment is right for you?
              </p>
              <button onClick={() => setBookingOpen(true)} className="btn-primary">
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default ServicesGrid;
