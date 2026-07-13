import Image from 'next/image'
import matteoPortrait from '@/assets/matteo-kcd-denmark.jpg'
import styles from '@/app/home.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <p className={styles.releaseBadge}>
            <span aria-hidden="true" />
            Human infrastructure v2026.7 is ready
          </p>
          <h1 id="hero-title" className={styles.heroTitle}>
            Your next platform hire has an API.
          </h1>
          <p className={styles.heroText}>
            Matteo ships cloud-native systems, open-source contributions, and
            technical stories people actually remember. No seat-based pricing.
            Mildly opinionated defaults.
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://cal.com/mbianchidev/intro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              Schedule a live demo
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#compatibility" className={styles.secondaryAction}>
              Run compatibility test
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className={styles.heroFinePrint}>
            Human-in-the-loop by design. Field-tested since 2015.
          </p>
        </div>

        <aside className={styles.productShell} aria-label="Matteo product specifications">
          <div className={styles.shellHeader}>
            <span className={styles.productCode}>MATTEO / HUMAN PLATFORM</span>
            <span className={styles.productStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              Ready to deploy
            </span>
          </div>
          <div className={styles.portraitFrame}>
            <Image
              src={matteoPortrait}
              alt="Matteo Bianchi speaking on stage at KCD Denmark"
              width={900}
              height={700}
              className={styles.portrait}
              priority
            />
            <span className={styles.portraitLabel}>LIVE SYSTEM / KCD DENMARK</span>
          </div>
          <dl className={styles.productSpecs}>
            <div className={styles.specRow}>
              <dt>Runtime</dt>
              <dd>Platform engineering + cloud native</dd>
            </div>
            <div className={styles.specRow}>
              <dt>Interfaces</dt>
              <dd>Code · products · talks · community</dd>
            </div>
            <div className={styles.specRow}>
              <dt>Known quirk</dt>
              <dd>May refactor the roadmap before lunch</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
