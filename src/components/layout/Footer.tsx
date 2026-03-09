import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl font-semibold tracking-tight">
              Smile<span className="text-accent">Gram</span>
            </span>
            <p className="font-body text-sm mt-4 leading-relaxed opacity-70">
              Modern aesthetic dentistry in Petaling Jaya. Comfort-first care with precision results.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/pjsmilegram_dentalclinic" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/@smilegramdentalpj/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@smilegram_dental" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.72a8.28 8.28 0 004.76 1.5V6.77a4.83 4.83 0 01-1-.08z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-caps mb-6 opacity-50">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/services", label: "Our Services" },
                { to: "/transformations", label: "Transformations" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Book Appointment" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-caps mb-6 opacity-50">Services</h4>
            <nav className="flex flex-col gap-3">
              {["Invisalign & Braces", "Teeth Whitening", "Veneers", "Dental Implants", "Scaling & Polishing", "Kids Dentistry"].map((s) => (
                <Link key={s} to="/services" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-caps mb-6 opacity-50">Visit Us</h4>
            <div className="font-body text-sm space-y-3 opacity-70">
              <p>📍 Petaling Jaya, Selangor<br />Malaysia</p>
              <p>📞 +60 12-345 6789</p>
              <p>✉️ hello@smilegram.dental</p>
              <div className="mt-4">
                <p className="font-medium opacity-100">Operating Hours</p>
                <p>Mon – Fri: 10am – 8pm</p>
                <p>Sat: 10am – 5pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs opacity-40">
            © 2026 SmileGram Dental. All rights reserved.
          </p>
          <div className="text-center text-xs opacity-40 font-body">
  Designed by{" "}
  <a
    href="https://sinuxconsulting.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium hover:underline transition-colors text-lime-400 hover:text-lime-300"
  >
    Sinux Consulting
  </a>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
