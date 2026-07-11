

const VALUES = [
  {
    tick: '01',
    title: 'Integrity & trust',
    text: 'Transparent in scope, pricing and delivery — no fine print.',
  },
  {
    tick: '02',
    title: 'Innovation & growth',
    text: 'We evolve with the tech and pedagogy, not behind it.',
  },
  {
    tick: '03',
    title: 'Empowerment & inclusion',
    text: 'Equal access to opportunity, regardless of where a student starts.',
  },
  {
    tick: '04',
    title: 'Excellence & impact',
    text: 'We measure ourselves by outcomes we can point to.',
  },
]

export default function AboutUs() {
  return (
    <section className="alt about-page" id="about-us">
      <div className="wrap">
        <div className="about-hero">
          <div className="about-hero-content">
            <div className="eyebrow">
              <span className="num">Ch. 01</span> ABOUT GNANA COMPUTECH
            </div>
            <h2>We create learning systems that feel practical, scalable, and deeply human.</h2>
            <p>
              <strong>Gnana CompuTech Solutions Pvt. Ltd.</strong> is a Bengaluru based education technology company built on the belief that knowledge should travel farther, faster, and more clearly through every learning experience.
            </p>
            <div className="about-hero-actions">
              <a href="/#courses" className="btn btn-primary">
                Explore programs
              </a>
              <a href="/#contact" className="btn btn-ghost">
                Meet the team
              </a>
            </div>
          </div>

          <div className="about-hero-card">
            <span className="about-pill">Education technology solutions</span>
            <h3>From classrooms to career pathways, we build tools that support growth at every stage.</h3>
            <ul>
              <li>Smart ERP platforms for schools and colleges</li>
              <li>Assessment systems with real time insight</li>
              <li>Hands on internships and project based learning</li>
            </ul>
          </div>
        </div>

        <div className="about-story-grid">
          <div className="ledger-card about-story-card">
            <h3>Our story</h3>
            <p>
              We started with a simple idea: technology should support teaching rather than complicate it. By combining academic understanding with product thinking, we create systems that are clear for educators and empowering for learners.
            </p>
          </div>
          <div className="ledger-card about-story-card">
            <h3>What we believe</h3>
            <ul>
              <li>Learning should be accessible, not intimidating.</li>
              <li>Every institution deserves reliable digital support.</li>
              <li>Good tools should make strong teaching easier to scale.</li>
            </ul>
          </div>
        </div>

        <div className="about-feature-strip">
          <div className="ledger-card">
            <h3>Our mission</h3>
            <p>
              To equip schools, colleges, and learners with intuitive digital tools that improve outcomes and expand opportunity.
            </p>
          </div>
          <div className="ledger-card">
            <h3>Our vision</h3>
            <p>
              To become a trusted reference point for education technology that is thoughtful, effective, and future ready.
            </p>
          </div>
          <div className="ledger-card">
            <h3>How we work</h3>
            <p>
              We listen closely, design around real workflows, and build solutions that stay useful long after launch.
            </p>
          </div>
        </div>

       
      </div>
    </section>
  )
}