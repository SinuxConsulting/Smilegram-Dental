import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/home/BookingCTA";
import clinicInterior from "@/assets/clinic-interior.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding porcelain-bg">
        <div className="container-wide">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="label-caps text-accent mb-4 block">Our Story</span>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight mb-6">
                  Dentistry Meets <span className="italic">Design</span>
                </h1>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                  SmileGram Dental was founded on a simple belief: dental care should be comfortable, 
                  transparent, and aesthetically driven. We're not your typical clinic — we're a modern 
                  dental studio where every detail is designed around your experience.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  From our calming interiors to our precision-focused treatments, everything at SmileGram 
                  is crafted to help you feel confident — during your visit and long after.
                </p>
              </div>
              <div className="rounded-sm overflow-hidden shadow-premium">
                <img src={clinicInterior} alt="SmileGram Dental clinic interior" className="w-full h-full object-cover aspect-[4/3]" />
                <p className="font-body text-xs text-muted-foreground/50 text-center py-2 italic">
                  Replace with clinic interior wide shot
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="label-caps text-accent mb-6 block">Our Philosophy</span>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-8">
                Comfort-First, <span className="italic">Always</span>
              </h2>
              <div className="space-y-6 font-body text-base leading-relaxed opacity-80">
                <p>
                  We believe that great dentistry starts with trust. That's why we take the time to listen, 
                  explain every option, and ensure you're comfortable before any procedure begins.
                </p>
                <p>
                  Our approach combines cutting-edge technology with a genuinely caring touch. 
                  We invest in the latest equipment not for show, but because precision technology 
                  means less discomfort, faster recovery, and better results for you.
                </p>
                <p>
                  Whether it's your child's first check-up or your own smile makeover, we treat 
                  every patient like family — with patience, respect, and undivided attention.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clinic Images */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-caps text-accent mb-4 block">Our Space</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground tracking-tight mb-12">
              Designed for <span className="italic">Comfort</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="rounded-sm overflow-hidden aspect-[4/3] bg-muted">
                <img src={heroClinic} alt="Treatment room" className="w-full h-full object-cover" />
              </div>
              <p className="font-body text-xs text-muted-foreground/50 mt-2 italic">Replace with clinic treatment room photo</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="rounded-sm overflow-hidden aspect-[4/3] bg-muted">
                <img src={clinicInterior} alt="Waiting area" className="w-full h-full object-cover" />
              </div>
              <p className="font-body text-xs text-muted-foreground/50 mt-2 italic">Replace with clinic waiting area photo</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
};

export default About;
