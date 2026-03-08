import ScrollReveal from "@/components/ScrollReveal";
import { Award, GraduationCap, Heart } from "lucide-react";
import dentistPortrait from "@/assets/dentist-portrait.jpg";

const team = [
  {
    name: "Dr. [Name Placeholder]",
    role: "Lead Dentist & Founder",
    qualifications: "BDS (UM), MDS Prosthodontics",
    registrations: "MDC Registered · ADA Member",
    specialties: ["Smile Design", "Veneers", "Implants"],
    approach: "Believes every patient deserves gentle, transparent care with results they can smile about. Committed to continuous education and precision-driven dentistry.",
    image: dentistPortrait,
  },
  {
    name: "Dr. [Name Placeholder]",
    role: "Orthodontist",
    qualifications: "BDS (USM), MClinDent Orthodontics",
    registrations: "MDC Registered · Invisalign Certified",
    specialties: ["Invisalign", "Braces", "Aligners"],
    approach: "Specialises in creating beautiful, functional smiles with a focus on patient comfort and aesthetics. Passionate about making orthodontic care accessible.",
    image: null,
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="label-caps text-accent mb-4 block tracking-[0.25em]">Your Care Team</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-4">
              Meet the <span className="italic">Dentists</span>
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
              Experienced, qualified, and genuinely passionate about your smile.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((doc, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="card-service p-0 overflow-hidden group h-full">
                {/* Portrait */}
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  {doc.image ? (
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary">
                      <span className="font-body text-xs text-muted-foreground text-center px-4">
                        Replace with professional portrait
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/40 to-transparent h-20" />
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                    {doc.name}
                  </h3>
                  <span className="label-caps text-accent text-[10px] mb-4 block">{doc.role}</span>

                  {/* Credentials */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="font-body text-xs text-muted-foreground">{doc.qualifications}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="font-body text-xs text-muted-foreground">{doc.registrations}</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {doc.specialties.map((s) => (
                      <span key={s} className="font-body text-[10px] font-medium bg-secondary text-foreground px-3 py-1 rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Approach */}
                  <div className="flex items-start gap-2 border-t border-border pt-5">
                    <Heart className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                      "{doc.approach}"
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center font-body text-xs text-muted-foreground/50 mt-8 italic">
            Replace with clinic's professional team portraits.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TeamSection;
