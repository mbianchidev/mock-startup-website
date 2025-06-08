'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CloudSlide {
  items: Array<{
    logo: string
    name: string
  }>
}

const cloudSlides: CloudSlide[] = [
  {
    items: [
      { logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', name: 'Amazon Web Services' },
      { logo: 'https://cdn.worldvectorlogo.com/logos/azure-2.svg', name: 'Microsoft Azure' },
      { logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg', name: 'Google Cloud Platform' }
    ]
  },
  {
    items: [
      { logo: 'https://cdn.worldvectorlogo.com/logos/ibm-cloud-1.svg', name: 'IBM Cloud' },
      { logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg', name: 'Oracle Cloud' },
      { logo: 'https://cdn.worldvectorlogo.com/logos/ali-cloud.svg', name: 'Alibaba Cloud' }
    ]
  },
  {
    items: [
      { logo: 'https://cdn.worldvectorlogo.com/logos/digitalocean-icon-1.svg', name: 'Digital Ocean' },
      { logo: 'https://cdn.worldvectorlogo.com/logos/heroku-4.svg', name: 'Heroku' },
      { logo: 'https://cdn.worldvectorlogo.com/logos/vercel.svg', name: 'Vercel' }
    ]
  },
  {
    items: [
      { logo: 'https://cdn.worldvectorlogo.com/logos/hetzner-1.svg', name: 'Hetzner' },
      { logo: 'https://cdn.worldvectorlogo.com/logos/akamai-4.svg', name: 'Akamai' },
      { logo: 'https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg', name: 'Cloudflare' }
    ]
  },
  {
    items: [
      { logo: 'https://cdn.worldvectorlogo.com/logos/logo-ovh.svg', name: 'OVHCloud' },
      { logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a3/ScalewayLogo.svg/2560px-ScalewayLogo.svg.png', name: 'Scaleway' },
      { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tencent_Cloud_Logo.svg/2560px-Tencent_Cloud_Logo.svg.png', name: 'Tencent Cloud' }
    ]
  }
]

export function CloudCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cloudSlides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="cloud">
      <h2>Any Cloud Platform</h2>
      <div className="cloud-carousel">
        <div className="cloud-slides-container">
          {cloudSlides.map((slide, slideIndex) => (
            <div 
              key={slideIndex} 
              className={`cloud-slide ${slideIndex === currentSlide ? 'active' : ''}`}
              style={{ 
                transform: `translateX(${(slideIndex - currentSlide) * 100}%)`,
                transition: 'transform 0.3s ease'
              }}
            >
              {slide.items.map((item, itemIndex) => (
                <div key={itemIndex} className="cloud-item">
                  <Image 
                    src={item.logo} 
                    alt={item.name}
                    width={100}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-indicators">
        {cloudSlides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}