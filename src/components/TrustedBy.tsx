import Image from 'next/image'
import styles from '@/app/home.module.css'

const companies = [
  { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg' },
  { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'Uber', logo: 'https://cdn.worldvectorlogo.com/logos/uber-2.svg' },
  { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/logo-amazon.svg' },
  { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-3.svg' },
  { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-13.svg' },
  { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-logo-icon.svg' },
  { name: 'Tesla', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-pure.svg' },
  { name: 'NVIDIA', logo: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg' },
  { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
  { name: 'Edera', logo: 'https://cdn.prod.website-files.com/6650e4fc72bc521db9b194c4/666704f17d1ff15728685ac2_mascot.svg' },
]

function LogoGroup({ decorative = false }: { decorative?: boolean }) {
  return (
    <ul className={styles.logoGroup} aria-hidden={decorative || undefined}>
      {companies.map((company) => (
        <li key={company.name} className={styles.logoCell}>
          <Image
            src={company.logo}
            alt={decorative ? '' : company.name}
            width={150}
            height={72}
            className={styles.companyLogo}
          />
        </li>
      ))}
    </ul>
  )
}

export function TrustedBy() {
  return (
    <section className={styles.lovedBy} aria-labelledby="loved-by-title">
      <div className={styles.lovedByHeader}>
        <h2 id="loved-by-title">Loved and trusted by people at</h2>
        <p>
          The legally safe version: excellent humans from these places have crossed
          paths with Matteo. Corporate endorsement sold separately.
        </p>
      </div>
      <div className={styles.logoRunway}>
        <div className={styles.logoTrack}>
          <LogoGroup />
          <LogoGroup decorative />
        </div>
      </div>
    </section>
  )
}
