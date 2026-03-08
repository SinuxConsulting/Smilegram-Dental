import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BookingModal from "@/components/BookingModal";

const BookingCTA = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-narrow relative text-center">
          <ScrollReveal>
            <span className="label-caps text-accent mb-6 block">Take the First Step</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-6">
              Ready for Your<br />
              <span className="italic">Best Smile?</span>
            </h2>
            <p className="font-body text-lg opacity-70 max-w-md mx-auto mb-10">
              Book a consultation and discover how we can help you smile with confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => setBookingOpen(true)} className="btn-accent">
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="https://wa.me/60000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 border border-primary-foreground/30 text-primary-foreground font-body hover:bg-primary-foreground/10">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default BookingCTA;
