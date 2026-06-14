import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { UseCases } from '@/components/UseCases'
import { TrustedBy } from '@/components/TrustedBy'
import { Integrations } from '@/components/Integrations'
import { AIIntegrations } from '@/components/AIIntegrations'
import { CloudCarousel } from '@/components/CloudCarousel'
import { KubernetesDistros } from '@/components/KubernetesDistros'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <UseCases />
      <TrustedBy />
      <Integrations />
      <AIIntegrations />
      <CloudCarousel />
      <KubernetesDistros />
      <Stats />
      <Testimonials />
    </>
  )
}