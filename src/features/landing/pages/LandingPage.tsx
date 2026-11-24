import { CrisisStrip } from '../components/CrisisStrip'
import { FinalCtaSection } from '../components/FinalCtaSection'
import { HeroSection } from '../components/HeroSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { PricingSection } from '../components/PricingSection'
import { QuoteSection } from '../components/QuoteSection'
import { TrustSection } from '../components/TrustSection'
import { WeightsSection } from '../components/WeightsSection'

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <WeightsSection />
      <HowItWorksSection />
      <TrustSection />
      <PricingSection />
      <FinalCtaSection />
      <CrisisStrip />
    </>
  )
}
