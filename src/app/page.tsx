import { Benchmarks } from '@/components/Benchmarks'
import { Capabilities } from '@/components/Capabilities'
import { CompatibilityLab } from '@/components/CompatibilityLab'
import { Hero } from '@/components/Hero'
import { KnownIssues } from '@/components/KnownIssues'
import { ProofLedger } from '@/components/ProofLedger'
import { Toolchain } from '@/components/Toolchain'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Capabilities />
      <CompatibilityLab />
      <ProofLedger />
      <Toolchain />
      <Benchmarks />
      <KnownIssues />
    </div>
  )
}