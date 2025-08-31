import Image from 'next/image'
import { TestimonialItem } from '@/types'

const testimonials: TestimonialItem[] = [
  {
    quote: "Matteo transformed how our team collaborates. We've seen a 40% increase in productivity since its landing across our organization. I don't want to work with any other platform (engineer).",
    author: 'Jane Doe',
    position: 'Chief Music Officer',
    company: 'Converge Inc.'
  },
  {
    quote: "Matteo helped us greatly improve our workflow and efficiency, especially around integration with CNCF tooling and open source in general. We have seen significant improvements in our project delivery timelines.",
    author: 'Tamal Sengupta',
    position: 'CEO',
    company: 'Generic YC Startup (never IPOing)'
  },
  {
    quote: "Scalability has never been easier. As our startup grew from 5 to 500 employees, Matteo scaled with us seamlessly, supporting our explosive growth. The flexibility and adaptability of the platform have been game-changers for us.",
    author: 'Sarah Johnson',
    position: 'Engineer',
    company: 'GrowthVeryFast LLC'
  }
]

const avatarSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMCAxOXYtMmE0IDQgMCAwIDAtNC00SDhhNCA0IDAgMCAwLTQgNHYyIj48L3BhdGg+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ij48L2NpcmNsZT48L3N2Zz4="

export function Testimonials() {
  return (
    <section id="testimonials">
      <h2>They say about Matteo...</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="testimonial-author">
              <Image 
                src={avatarSvg}
                alt="Avatar"
                width={24}
                height={24}
              />
              <div>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}