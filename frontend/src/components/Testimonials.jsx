

const TESTIMONIALS = [
  {
    text: 'Gnana CompuTech helped me bridge the gap between theory and real-world coding. The internship was structured and guided me through Data Analytics hands-on.',
    author: 'Gowda M. G. — BCA Graduate',
  },
  {
    text: 'Their Power BI and Excel course was a game-changer. I was able to visualise data, build dashboards, and land a job in analytics after certification.',
    author: 'Shalini A. — Graduate',
  },
  {
    text: 'The Python internship gave me exposure to real-world tools and projects, with mentorship and support throughout the journey.',
    author: 'Bharath M. H. — BCA Student',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">
            <span className="num">Ch. 04</span> VOICES OF TRUST
          </div>
          <h2>What students and partners tell us.</h2>
        </div>

        <div className="testimonial-band">
  <div className="testimonial-cards full-width">
    {TESTIMONIALS.map((t) => (
      <div className="testimonial-card" key={t.author}>
        <span className="quote-mark">&rdquo;</span>
        <p className="testimonial-text">{t.text}</p>
        <div className="testimonial-author">{t.author}</div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  )
}
