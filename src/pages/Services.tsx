import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BookingModal from "@/components/BookingModal";
import BookingCTA from "@/components/home/BookingCTA";
import { ArrowRight } from "lucide-react";

const servicesData = [
  {
    id: "invisalign",
    title: "Invisalign & Braces",
    icon: "✦",
    description: "Straighten your teeth with modern, comfortable orthodontic solutions tailored to your lifestyle.",
    forWhom: ["Adults seeking discreet alignment", "Teens who prefer removable aligners", "Patients with mild to moderate crowding", "Those wanting a straighter smile without metal braces"],
    benefits: ["Nearly invisible treatment", "Removable for eating and cleaning", "Predictable results with 3D planning", "Fewer office visits required"],
    faqs: [
      { q: "How long does Invisalign treatment take?", a: "Most treatments range from 6 to 18 months, depending on complexity." },
      { q: "Is Invisalign painful?", a: "You may feel slight pressure when switching aligners, but it's generally comfortable." },
      { q: "Can I eat normally with Invisalign?", a: "Yes! Simply remove your aligners before eating and drinking." },
    ],
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    icon: "◇",
    description: "Professional-grade whitening that delivers visible results in a single visit, safely and comfortably.",
    forWhom: ["Anyone wanting a brighter smile", "Patients with staining from coffee or tea", "Those preparing for a special event", "People who want safe, supervised whitening"],
    benefits: ["Up to 8 shades brighter in one session", "Safe, dentist-supervised process", "Long-lasting results with proper care", "Minimal sensitivity with modern techniques"],
    faqs: [
      { q: "How long does whitening last?", a: "Results typically last 6-12 months with proper care and occasional touch-ups." },
      { q: "Is professional whitening safe?", a: "Yes, professional whitening is safe when performed by a qualified dentist." },
    ],
  },
  {
    id: "veneers",
    title: "Veneers",
    icon: "○",
    description: "Custom porcelain veneers crafted to transform your smile with natural-looking, durable results.",
    forWhom: ["Patients with chipped or worn teeth", "Those with gaps or uneven spacing", "Anyone seeking a complete smile makeover", "Patients wanting permanent whitening"],
    benefits: ["Natural-looking, custom-matched color", "Stain-resistant porcelain material", "Minimal tooth preparation", "Dramatic yet natural transformation"],
    faqs: [
      { q: "How long do veneers last?", a: "With proper care, porcelain veneers can last 10-15 years or more." },
      { q: "Are veneers reversible?", a: "Traditional veneers require minimal tooth preparation, so they are considered a permanent treatment." },
    ],
  },
  {
    id: "implants",
    title: "Dental Implants",
    icon: "△",
    description: "Permanent, natural-feeling tooth replacements that restore function and confidence.",
    forWhom: ["Patients with missing teeth", "Those with failing bridges or dentures", "Anyone wanting a permanent solution", "Patients with adequate bone density"],
    benefits: ["Looks and feels like a natural tooth", "Prevents bone loss", "No impact on adjacent teeth", "Long-lasting (often lifetime) solution"],
    faqs: [
      { q: "Is the implant procedure painful?", a: "The procedure is done under local anaesthesia. Most patients report less discomfort than expected." },
      { q: "How long does the process take?", a: "The full process typically takes 3-6 months, including healing time for the implant to integrate." },
    ],
  },
  {
    id: "scaling",
    title: "Scaling & Polishing",
    icon: "□",
    description: "Thorough professional cleaning to remove plaque, tartar, and surface stains for healthier gums.",
    forWhom: ["Everyone (recommended every 6 months)", "Patients with gum sensitivity", "Those with visible tartar build-up", "Anyone wanting fresher breath"],
    benefits: ["Prevents gum disease", "Removes stubborn stains", "Freshens breath immediately", "Maintains long-term oral health"],
    faqs: [
      { q: "How often should I get scaling done?", a: "We recommend every 6 months for most patients, though some may benefit from more frequent visits." },
      { q: "Does scaling damage enamel?", a: "No. Professional scaling is safe and does not damage tooth enamel." },
    ],
  },
  {
    id: "kids",
    title: "Kids Dentistry",
    icon: "☆",
    description: "Gentle, fun dental care designed to make young patients feel comfortable and build healthy habits.",
    forWhom: ["Children of all ages", "First-time dental visitors", "Kids needing preventive care", "Parents wanting a child-friendly environment"],
    benefits: ["Gentle, patient approach", "Fun, child-friendly environment", "Early detection of issues", "Building lifelong dental habits"],
    faqs: [
      { q: "At what age should my child first visit the dentist?", a: "We recommend a first visit by age 1 or when the first tooth appears." },
      { q: "How do you handle anxious children?", a: "Our team is specially trained in child-friendly techniques to make every visit comfortable and positive." },
    ],
  },
];

const Services = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding porcelain-bg porcelain-grid">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-caps text-accent mb-4 block">Our Services</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight mb-6">
              Comprehensive <span className="italic">Dental Care</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl">
              From routine check-ups to complete smile makeovers, every treatment is delivered with precision, comfort, and care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services detail */}
      {servicesData.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${idx % 2 === 0 ? "bg-background" : "bg-secondary/30"}`}
        >
          <div className="container-wide">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left: Title + description */}
                <div className="lg:col-span-1">
                  <span className="text-3xl text-accent mb-4 block">{service.icon}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="btn-primary text-sm"
                  >
                    Ask About This <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Who it's for */}
                  <div>
                    <h3 className="label-caps text-muted-foreground mb-3">Who It's For</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.forWhom.map((item) => (
                        <li key={item} className="font-body text-sm text-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">·</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="label-caps text-muted-foreground mb-3">Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.map((item) => (
                        <li key={item} className="font-body text-sm text-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* FAQ */}
                  <div>
                    <h3 className="label-caps text-muted-foreground mb-3">Common Questions</h3>
                    <div className="space-y-4">
                      {service.faqs.map((faq) => (
                        <div key={faq.q}>
                          <h4 className="font-body text-sm font-semibold text-foreground mb-1">{faq.q}</h4>
                          <p className="font-body text-sm text-muted-foreground">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <BookingCTA />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
};

export default Services;
