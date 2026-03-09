import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/home/BookingCTA";
import smilePortrait from "@/assets/smile-portrait.jpg";
import Seo from "@/components/Seo";

const categories = ["All", "Whitening", "Braces / Invisalign", "Veneers", "General"];

const galleryItems = [
  { id: 1, category: "Whitening", title: "Professional Whitening — 6 Shades Brighter", desc: "Patient achieved dramatic results in a single session." },
  { id: 2, category: "Veneers", title: "Porcelain Veneer Smile Makeover", desc: "Full upper arch veneers for a natural, symmetrical smile." },
  { id: 3, category: "Braces / Invisalign", title: "Invisalign Alignment — 12 Months", desc: "Corrected crowding and bite issues with clear aligners." },
  { id: 4, category: "General", title: "Composite Bonding Restoration", desc: "Repaired chipped front teeth with seamless bonding." },
  { id: 5, category: "Whitening", title: "In-Office Whitening + Take-Home Kit", desc: "Combined approach for maximum, lasting brightness." },
  { id: 6, category: "Veneers", title: "Minimal-Prep Veneers — 4 Units", desc: "Conservative approach preserving maximum tooth structure." },
  { id: 7, category: "Braces / Invisalign", title: "Traditional Braces — Gap Closure", desc: "18-month treatment for complete gap closure and alignment." },
  { id: 8, category: "General", title: "Full Mouth Rehabilitation", desc: "Comprehensive treatment combining implants, crowns, and whitening." },
];

const Transformations = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main className="pt-20">
      <Seo
  title="Smile Transformations"
  description="See before-and-after smile transformations from SmileGram Dental, including whitening, veneers, Invisalign, and restorative dental treatments."
  path="/transformations"
/>
      {/* Hero */}
      <section className="section-padding porcelain-bg porcelain-grid">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-caps text-accent mb-4 block">Before & After</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight mb-6">
              Smile <span className="italic">Transformations</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl">
              Real results from real patients. Every transformation is unique, crafted with precision and care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="section-padding pb-8">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-body text-sm px-5 py-2 rounded-sm border transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-foreground text-primary-foreground border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                <div className="group card-service p-0 overflow-hidden cursor-pointer">
                  <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                    <img
                      src={smilePortrait}
                      alt={`${item.title} before and after dental transformation at SmileGram Dental`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="label-caps text-[10px] bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-body text-xs text-primary-foreground/80 italic">
                        Replace with actual transformation photos · Client consent required
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center font-body text-xs text-muted-foreground/50 mt-12 italic">
              All transformations shown with patient consent. Replace with actual before/after photography.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
};

export default Transformations;
