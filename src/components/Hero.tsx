'use client'

import Image from 'next/image'

export function Hero() {
  const handleTryNow = () => {
    window.open('/mock-startup-website/redirect/book15', '_blank')
  }

  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Transform Your Business with Matteo</h1>
        <p>The innovative platform (engineer) that boosts productivity, scales with your needs, and simplifies complex workflows.</p>
        <div className="hero-buttons">
          <button className="primary-button" onClick={handleTryNow}>
            Try Now
          </button>
          <a 
            href="https://youtube.com/@mbianchidev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="secondary-button"
          >
            Watch Demo
          </a>
        </div>
      </div>
      <div className="hero-image">
        <Image 
          src="https://github.com/mbianchidev/mbianchidev/blob/master/images/2024/KCD%20Denmark%202024/54170961528_19266e2856_o.jpg?raw=true" 
          alt="Matteo platform visualization" 
          width={600} 
          height={400}
          priority
        />
      </div>
    </section>
  )
}
