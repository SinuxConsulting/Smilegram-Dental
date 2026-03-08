import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import smilePortrait from "@/assets/smile-portrait.jpg";

const cases = [
  { category: "Whitening", label: "Professional Whitening Transformation", duration: "1 session" },
  { category: "Veneers", label: "Porcelain Veneer Smile Makeover", duration: "2 weeks" },
  { category: "Invisalign", label: "Invisalign Alignment Correction", duration: "12 months" },
];

const TransformationsPreview = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

  return (
    <section className="section-padding porcelain-bg">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="label-caps text-accent mb-4 block tracking-[0.25em]">Results</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
                Smile <span className="italic">Transformations</span>
              </h2>
              <p className="font-body text-base text-muted-foreground mt-3 max-w-md">
                Drag the slider to see real transformation results. Every smile is crafted with precision.
              </p>
            </div>
            <Link to="/transformations" className="btn-ghost text-accent">
              See All Transformations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before/After interactive slider */}
          <ScrollReveal>
            <div
              ref={sliderRef}
              className="relative rounded-sm overflow-hidden aspect-square bg-card border border-border cursor-ew-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              {/* "After" image (full) */}
              <img src={smilePortrait} alt="After transformation" className="w-full h-full object-cover" />

              {/* "Before" overlay with clip */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={smilePortrait}
                  alt="Before transformation"
                  className="w-full h-full object-cover brightness-75 contrast-90 saturate-50"
                />
                <div className="absolute inset-0 bg-foreground/10" />
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4">
                <span className="label-caps text-[10px] bg-foreground/80 text-primary-foreground px-3 py-1 rounded-sm backdrop-blur-sm">
                  Before
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="label-caps text-[10px] bg-accent/90 text-accent-foreground px-3 py-1 rounded-sm backdrop-blur-sm">
                  After
                </span>
              </div>

              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground/80 z-10"
                style={{ left: `${sliderPos}%` }}
              />

              {/* Slider handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{ left: `${sliderPos}%` }}
              >
                <span className="text-foreground font-bold text-sm">↔</span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
                <span className="label-caps text-primary-foreground/60 text-[10px]">Smile Makeover</span>
                <p className="font-display text-xl text-primary-foreground font-semibold">
                  Porcelain Veneer Transformation
                </p>
                <p className="font-body text-xs text-primary-foreground/60 mt-1 italic">
                  Replace with actual before/after photos
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Case study cards */}
          <div className="flex flex-col gap-4">
            {cases.map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 0.1}>
                <div className="card-service flex items-center gap-6 group cursor-pointer">
                  <div className="w-20 h-20 rounded-sm bg-secondary shrink-0 flex items-center justify-center relative overflow-hidden">
                    <img src={smilePortrait} alt={c.category} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    <span className="absolute label-caps text-primary-foreground text-[9px] bg-foreground/60 px-2 py-0.5 rounded-sm">
                      {c.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {c.label}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-body text-xs text-muted-foreground">
                        Treatment time: {c.duration}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.3}>
              <Link to="/transformations" className="btn-primary mt-4 w-full text-center justify-center">
                See All Transformations
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsPreview;
