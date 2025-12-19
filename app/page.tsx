import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FeaturedCars } from "@/components/featured-cars"
import { HowItWorks } from "@/components/how-it-works"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <WhyChooseUs />
      <FeaturedCars />
      <HowItWorks />
      <CTASection />
    </>
  )
}
