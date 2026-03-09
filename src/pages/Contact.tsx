import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BookingModal from "@/components/BookingModal";
import Seo from "@/components/Seo";

const Contact = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="pt-20">
      <Seo
  title="Contact SmileGram Dental"
  description="Contact SmileGram Dental to book a consultation, ask about treatments, or reach our dental clinic in Petaling Jaya by phone or WhatsApp."
  path="/contact"
/>
      {/* Hero */}
      <section className="section-padding porcelain-bg porcelain-grid">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-caps text-accent mb-4 block">Get In Touch</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight mb-6">
              Book Your <span className="italic">Visit</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl">
              Ready to start your smile journey? Reach out — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Details */}
            <ScrollReveal>
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Contact Details</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-body text-sm font-semibold text-foreground mb-1">Address</h3>
                        <p className="font-body text-sm text-muted-foreground">
                          [Unit / Floor], [Building Name]<br />
                          Petaling Jaya, Selangor<br />
                          Malaysia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-body text-sm font-semibold text-foreground mb-1">Phone</h3>
                        <a href="tel:+60000000000" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">
                          +60 00-000 0000
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-body text-sm font-semibold text-foreground mb-1">WhatsApp</h3>
                        <a href="https://wa.me/60000000000" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">
                          Chat with us on WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-body text-sm font-semibold text-foreground mb-1">Operating Hours</h3>
                        <div className="font-body text-sm text-muted-foreground space-y-1">
                          <p>Monday – Friday: 10:00 AM – 8:00 PM</p>
                          <p>Saturday: 10:00 AM – 5:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-sm overflow-hidden border border-border bg-muted aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="font-body text-sm text-muted-foreground">Google Maps Embed</p>
                    <p className="font-body text-xs text-muted-foreground/50 italic">Replace with actual map embed</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Inline Form */}
            <ScrollReveal delay={0.15}>
              <div className="card-service p-8 md:p-10">
                <h2 className="font-display text-3xl font-semibold text-foreground mb-2">Request a Consultation</h2>
                <p className="font-body text-sm text-muted-foreground mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

                <InlineBookingForm />

                <p className="font-body text-xs text-muted-foreground/50 text-center mt-6 italic">
                  Demo: In production, this form connects to WhatsApp / CRM for instant confirmation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">
              Prefer to <span className="italic">Talk?</span>
            </h2>
            <p className="font-body text-lg opacity-70 mb-8">
              Call us directly or send a WhatsApp message — we usually respond within minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+60000000000" className="btn-accent">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a href="https://wa.me/60000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 border border-primary-foreground/30 text-primary-foreground font-body hover:bg-primary-foreground/10">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
};

const InlineBookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
        <p className="font-body text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="btn-ghost text-accent mt-4 text-sm">Submit another</button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <div>
        <label className="label-caps text-muted-foreground mb-2 block">Full Name</label>
        <input type="text" required placeholder="Your name" className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
      </div>
      <div>
        <label className="label-caps text-muted-foreground mb-2 block">Phone Number</label>
        <input type="tel" required placeholder="+60 12-345 6789" className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
      </div>
      <div>
        <label className="label-caps text-muted-foreground mb-2 block">Preferred Service</label>
        <select required className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
          <option value="">Select a service</option>
          {["Invisalign & Braces", "Teeth Whitening", "Veneers", "Dental Implants", "Scaling & Polishing", "Kids Dentistry", "General Check-up", "Other"].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label-caps text-muted-foreground mb-2 block">Preferred Date</label>
          <input type="date" className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
        </div>
        <div>
          <label className="label-caps text-muted-foreground mb-2 block">Preferred Time</label>
          <input type="time" className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
        </div>
      </div>
      <div>
        <label className="label-caps text-muted-foreground mb-2 block">Message (Optional)</label>
        <textarea rows={3} placeholder="Any concerns or questions..." className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none" />
      </div>
      <button type="submit" className="btn-primary w-full">Request Consultation</button>
    </form>
  );
};

export default Contact;
