import Image from 'next/image'

const companies = [
  { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg' },
  { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'Uber', logo: 'https://cdn.worldvectorlogo.com/logos/uber-2.svg' },
  { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/logo-amazon.svg' },
  { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-3.svg' },
  { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-13.svg' },
  { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-logo-icon.svg' },
  { name: 'Tesla', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-pure.svg' },
  { name: 'NVidia', logo: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg' },
  { name: 'Edera', logo: 'https://cdn.prod.website-files.com/6650e4fc72bc521db9b194c4/666704f17d1ff15728685ac2_mascot.svg' }
]

export function TrustedBy() {
  return (
    <section id="trusted-by">
      <h2>Loved and trusted by people at</h2>
      <div className="logo-carousel">
        <div className="logo-slide">
          {companies.concat(companies).map((company, index) => (
            <Image
              key={index}
              src={company.logo}
              alt={company.name}
              width={120}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
