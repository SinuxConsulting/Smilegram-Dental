import ScrollReveal from "@/components/ScrollReveal";
import { MessageSquare, ScanLine, ClipboardList, CalendarCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    desc: "We start by listening. Share your concerns, goals, and any dental anxiety — we'll make you comfortable from the first minute.",
    detail: "No pressure, no jargon. Just an honest conversation about your smile.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Digital Scan & Assessment",
    desc: "Using state-of-the-art digital scanners, we map your teeth in 3D — no messy impressions, no discomfort.",
    detail: "You'll see your own teeth on screen and understand the full picture.",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Treatment Plan",
    desc: "We present clear options with transparent pricing. You choose what feels right — we never push unnecessary procedures.",
    detail: "Every plan is personalised to your needs, timeline, and budget.",
  },
  {
    icon: CalendarCheck,
    step: "04",
    title: "Your Timeline",
    desc: "We schedule your treatment around your life. Flexible appointments, efficient sessions, and clear milestones along the way.",
    detail: "Most patients see visible results sooner than they expect.",
  },
];

const FirstVisitSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Subtle depth layer */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/40 to-transparent" />

        <div className="container-wide relative">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="label-caps text-accent mb-4 block tracking-[0.25em]">Your First Visit</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-4">
                What to <span className="italic">Expect</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Nervous about your first visit? Don't be. Here's exactly how your journey 
                with SmileGram unfolds — step by step, with zero surprises.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="relative group h-full">
                  {/* Connector line on desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border z-0" style={{ width: 'calc(100% - 2rem)' }} />
                  )}

                  <div className="relative bg-card border border-border rounded-sm p-8 h-full transition-all duration-300 hover:border-accent/40 hover:shadow-premium">
                    {/* Step number */}
                    <span className="font-display text-5xl font-light text-accent/20 absolute top-4 right-4">
                      {step.step}
                    </span>

                    <step.icon className="w-7 h-7 text-accent mb-5" />
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <p className="font-body text-xs text-accent italic">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA after section */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Ready to experience the difference?
              </p>
              <button onClick={() => setBookingOpen(true)} className="btn-primary">
                Book Your First Visit
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

export default FirstVisitSection;
