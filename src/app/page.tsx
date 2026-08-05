import { Benchmarks } from '@/components/Benchmarks'
import { Capabilities } from '@/components/Capabilities'
import { CompatibilityLab } from '@/components/CompatibilityLab'
import { Hero } from '@/components/Hero'
import { KnownIssues } from '@/components/KnownIssues'
import { ProofLedger } from '@/components/ProofLedger'
import { Toolchain } from '@/components/Toolchain'
import { TrustedBy } from '@/components/TrustedBy'
import { createPageMetadata } from '@/lib/siteMetadata'
import styles from './home.module.css'

export const metadata = createPageMetadata({
  title: 'Matteo — The Human Platform',
  description: 'Matteo Bianchi is a Senior Engineer across platforms, solutions, software, and AI, combining deep engineering with customer insight, open source, and technical communication.',
  path: '/',
})

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Capabilities />
      <TrustedBy />
      <CompatibilityLab />
      <ProofLedger />
      <Toolchain />
      <Benchmarks />
      <KnownIssues />
    </div>
  )
}