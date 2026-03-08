import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Shield, Clock } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import heroImage from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Layered background depth */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 porcelain-bg" />
          <div className="absolute inset-0 porcelain-grid opacity-20" />
          {/* Accent glow */}
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="relative container-wide section-padding pt-32 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[80vh]">
            {/* Left: Copy — takes 7 cols */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="label-caps text-accent mb-6 block tracking-[0.25em]">
                  Petaling Jaya · Aesthetic & General Dentistry
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light leading-[0.92] tracking-[-0.02em] text-foreground mb-6"
              >
                Dentistry That{" "}
                <span className="italic font-light text-accent">Feels</span>{" "}
                <br className="hidden sm:block" />
                As Good As{" "}
                <br className="hidden lg:block" />
                It Looks.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="font-body text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10"
              >
                A modern dental studio where comfort, precision, and aesthetics 
                come together. Gentle care you can trust — results you'll love to show.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <button onClick={() => setBookingOpen(true)} className="btn-primary group">
                  Book Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="https://wa.me/60000000000" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </motion.div>

              {/* Trust signals near CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-wrap items-center gap-6 text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-body text-xs">4.9 on Google</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-accent" />
                  <span className="font-body text-xs">Comfort-First Care</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span className="font-body text-xs">Same-Week Appointments</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Hero Image — takes 5 cols */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 lg:col-span-5 relative"
            >
              <div className="relative rounded-sm overflow-hidden shadow-premium aspect-[3/4]">
                <img
                  src={heroImage}
                  alt="SmileGram Dental modern clinic interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-foreground/5 to-transparent" />
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border px-6 py-4 rounded-sm shadow-premium"
              >
                <span className="label-caps text-accent text-[10px] block mb-1">Now Accepting</span>
                <p className="font-display text-xl font-semibold text-foreground">New Patients</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Walk-ins welcome</p>
              </motion.div>

              {/* Top-right trust badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded-sm shadow-lg"
              >
                <span className="font-display text-lg font-bold">1,000+</span>
                <span className="font-body text-[10px] block">Smiles Served</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default HeroSection;
