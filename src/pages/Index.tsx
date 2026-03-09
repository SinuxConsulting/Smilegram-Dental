import HeroSection from "@/components/home/HeroSection";
import ProofStrip from "@/components/home/ProofStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import FirstVisitSection from "@/components/home/FirstVisitSection";
import WhySmileGram from "@/components/home/WhySmileGram";
import TransformationsPreview from "@/components/home/TransformationsPreview";
import TeamSection from "@/components/home/TeamSection";
import BookingCTA from "@/components/home/BookingCTA";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <main>
      <Seo
        title="Modern Aesthetic Dentistry in Petaling Jaya"
        description="SmileGram Dental offers comfort-first general and aesthetic dentistry in Petaling Jaya, including Invisalign, veneers, whitening, implants, and family dental care."
        path="/"
      />
      <HeroSection />
      <ProofStrip />
      <ServicesGrid />
      <FirstVisitSection />
      <WhySmileGram />
      <TransformationsPreview />
      <TeamSection />
      <BookingCTA />
    </main>
  );
};

export default Index;
