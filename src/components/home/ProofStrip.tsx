import ScrollReveal from "@/components/ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { text: "Best dental experience I've ever had. So gentle and professional!", author: "Sarah L.", service: "Whitening" },
  { text: "My veneers look incredibly natural. Absolutely life-changing!", author: "James K.", service: "Veneers" },
  { text: "The team made me feel completely at ease from day one.", author: "Priya M.", service: "Invisalign" },
  { text: "Professional, modern, and genuinely caring. Highly recommended.", author: "Ahmad R.", service: "General" },
];

const ProofStrip = () => {
  return (
    <section className="border-y border-border bg-card/50">
      <ScrollReveal>
        <div className="container-wide px-6 md:px-12 lg:px-20 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Stats cluster */}
            <div className="flex items-center gap-8 shrink-0">
              {/* Google rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-foreground">4.9</span>
                  <span className="font-body text-xs text-muted-foreground ml-1.5">Google</span>
                </div>
              </div>

              <div className="w-px h-10 bg-border" />

              {/* Smiles count */}
              <div>
                <span className="font-display text-2xl font-semibold text-foreground">1,000+</span>
                <span className="font-body text-xs text-muted-foreground block">Smiles Transformed</span>
              </div>

              <div className="hidden md:block w-px h-10 bg-border" />

              {/* Experience */}
              <div className="hidden md:block">
                <span className="font-display text-2xl font-semibold text-foreground">8+</span>
                <span className="font-body text-xs text-muted-foreground block">Years Experience</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-border" />

            {/* Scrolling testimonials */}
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-1">
              {testimonials.map((t, i) => (
                <div key={i} className="shrink-0 max-w-[220px] relative pl-4 border-l-2 border-accent/30">
                  <Quote className="w-3 h-3 text-accent/40 mb-1" />
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{t.text}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="font-body text-[10px] font-medium text-foreground">— {t.author}</p>
                    <span className="font-body text-[9px] text-accent bg-accent/10 px-1.5 py-0.5 rounded-sm">{t.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProofStrip;
