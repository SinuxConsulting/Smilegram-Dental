import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const services = [
  "Invisalign & Braces",
  "Teeth Whitening",
  "Veneers",
  "Dental Implants",
  "Scaling & Polishing",
  "Kids Dentistry",
  "General Check-up",
  "Other",
];

const BookingModal = ({ open, onClose }: BookingModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-background rounded-sm border border-border shadow-premium w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Book a Consultation</h2>
                <p className="font-body text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours.</p>
              </div>
              <button onClick={handleClose} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+60 12-345 6789"
                    className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Preferred Service</label>
                  <select
                    required
                    className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label-caps text-muted-foreground mb-2 block">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-muted-foreground mb-2 block">Preferred Time</label>
                    <input
                      type="time"
                      className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any concerns or questions..."
                    className="w-full font-body text-sm px-4 py-3 rounded-sm border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Request Consultation
                </button>
                <p className="text-center font-body text-xs text-muted-foreground">
                  Or WhatsApp us directly at{" "}
                  <a href="https://wa.me/60000000000" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    +60 00-000 0000
                  </a>
                </p>
              </form>
            ) : (
              <div className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Thank You!</h3>
                <p className="font-body text-sm text-muted-foreground mb-2">
                  Your consultation request has been received.
                </p>
                <p className="font-body text-xs text-muted-foreground/70 italic mb-8">
                  Demo: In production, this connects to WhatsApp/CRM for instant confirmation.
                </p>
                <button onClick={handleClose} className="btn-secondary text-sm">
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
