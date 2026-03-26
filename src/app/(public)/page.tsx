import { HeroSection } from "@/components/public/hero-section";
import { PricingSection } from "@/components/public/pricing-section";
import { ForWhoSection } from "@/components/public/for-who-section";
import { AboutCarSection } from "@/components/public/about-car-section";
import { HowItWorksSection } from "@/components/public/how-it-works-section";
import { FaqSection } from "@/components/public/faq-section";
import { ContactSection } from "@/components/public/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <ForWhoSection />
      <AboutCarSection />
      <HowItWorksSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
