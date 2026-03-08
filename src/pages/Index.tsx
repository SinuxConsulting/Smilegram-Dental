import HeroSection from "@/components/home/HeroSection";
import ProofStrip from "@/components/home/ProofStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import FirstVisitSection from "@/components/home/FirstVisitSection";
import WhySmileGram from "@/components/home/WhySmileGram";
import TransformationsPreview from "@/components/home/TransformationsPreview";
import TeamSection from "@/components/home/TeamSection";
import BookingCTA from "@/components/home/BookingCTA";

const Index = () => {
  return (
    <main>
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
