import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { UseCases } from '@/components/UseCases'
import { TrustedBy } from '@/components/TrustedBy'
import { Integrations } from '@/components/Integrations'
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
      <CloudCarousel />
      <KubernetesDistros />
      <Stats />
      <Testimonials />
    </>
  )
}