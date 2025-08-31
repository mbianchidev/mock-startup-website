'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import SessionizeEmbed from '@/components/SessionizeEmbed'
import Collapsible from '@/components/Collapsible'

interface TeamMember {
  name: string
  position: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Matteo Bianchi',
    position: 'CEO',
    image: 'https://github.com/mbianchidev/mbianchidev/blob/master/images/2024/KCD%20Denmark%202024/54170961528_19266e2856_o.jpg?raw=true'
  },
  {
    name: 'Matieu Blanc',
    position: 'CTO',
    image: 'https://github.com/mbianchidev/mbianchidev/blob/master/images/2024/KCD%20Denmark%202024/54170961528_19266e2856_o.jpg?raw=true'
  },
  {
    name: 'Matthew White',
    position: 'CFO',
    image: 'https://github.com/mbianchidev/mbianchidev/blob/master/images/2024/KCD%20Denmark%202024/54170961528_19266e2856_o.jpg?raw=true'
  },
  {
    name: 'Felice Nero',
    position: 'CISO',
    image: 'https://github.com/mbianchidev/mbianchidev/blob/master/images/2024/KCD%20Denmark%202024/54170961528_19266e2856_o.jpg?raw=true'
  },
  {
    name: 'Teo Blanco',
    position: 'COO',
    image: 'https://github.com/mbianchidev/mbianchidev/blob/master/images/2024/KCD%20Denmark%202024/54170961528_19266e2856_o.jpg?raw=true'
  },
  {
    name: 'Mattia Bianchi',
    position: 'CMO',
    image: 'https://github.com/mbianchidev/mbianchidev/blob/master/images/2024/KCD%20Denmark%202024/54170961528_19266e2856_o.jpg?raw=true'
  }
]

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <h1>About Matteo</h1>
          <p>Learn more about our mission, vision, community, and team.</p>
          <div className="hero-buttons">
            <Link href="#mission" className="primary-button">Our Mission</Link>
            <Link href="#vision" className="secondary-button">Our Vision</Link>
          </div>
        </div>
      </section>

      <section id="mission">
        <h2 className="section-title">Our Mission</h2>
        <div className="content-container">
          <ul>
            <li>Do our best to make the world a better place by building something meaningful and impactful.</li>
            <li>Help engineers to achieve their goals, sharing our knowledge and experience and giving back to the community that helped us to grow.</li>
            <li>Advocate for Cloud Native Open Source technologies. Open Source has been the past, is the present and will be the future of IT and powers the world we live in today.</li>
            <li>Simplify the life of our fellow developers and engineers, by building tools and services that make their life easier.</li>
          </ul>
        </div>
      </section>

      <section id="vision">
        <h2 className="section-title">Our Vision</h2>
        <div className="content-container">
          <h3>We envision a world where</h3>
          <p>Open collaboration, trust, and creativity empower engineers and technologists to build impactful solutions that simplify lives and strengthen communities.</p>
          <p>Guided by transparency, integrity, reliability, and creativity, we strive to inspire and support engineers through our products, nurturing a global culture of learning and innovation.</p>
          <p>By championing open source Cloud Native technologies and advocating for clarity in communication, our aim is to elevate how we create, share, and solve—reaching and improving the lives of at least 100 million people in the next 3 years.</p>
        </div>
      </section>

      <section id="community">
  <h2 className="section-title">Community</h2>
  <p className="collapsible-hint" style={{ textAlign: 'center', color: '#6b7280', marginTop: -20, marginBottom: 10 }}>Click a title to expand/collapse</p>
  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', margin: '0 auto' }}>
          <Collapsible title="Speaking">
            {mounted && (
              <SessionizeEmbed src="https://sessionize.com/api/speaker/events/fov84g24dw/0x0x3fb393x" />
            )}
          </Collapsible>
          <Collapsible title="Talks">
            {mounted && (
              <SessionizeEmbed src="https://sessionize.com/api/speaker/sessions/fov84g24dw/0x0x3fb393x" />
            )}
          </Collapsible>
          <Collapsible title="OSS Contributions">
            <a href="https://github.com/tico88612/devstats-card">
              <Image 
                src="https://devstats.me/?username=mbianchidev&w=828&q=75" 
                alt="DevStats Card" 
                width={400}
                height={200}
              />
            </a>
          </Collapsible>
        </div>
      </section>

      <section id="team">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-photo">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={200} 
                  height={200}
                />
              </div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}