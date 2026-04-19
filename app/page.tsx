// app/page.tsx
import Hero        from '@/components/sections/Hero'
import TrustBar    from '@/components/sections/TrustBar'
import Services    from '@/components/sections/Services'
import HowItWorks  from '@/components/sections/HowItWorks'
import Team        from '@/components/sections/Team'
import Promise     from '@/components/sections/Promise'
import Testimonials from '@/components/sections/Testimonials'
import FAQ         from '@/components/sections/FAQ'
import CTA         from '@/components/sections/CTA'
import ServiceModals from '@/components/sections/ServiceModals'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Team />
      <Promise />
      <Testimonials />
      <FAQ />
      <CTA />
      <ServiceModals />
    </main>
  )
}
