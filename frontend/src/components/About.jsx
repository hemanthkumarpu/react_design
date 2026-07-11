import aboutTeamPhoto from '../assets/about-team.jpg'
import msmeImg from "../assets/msme.jpg";
import mcaImg from "../assets/mca.webp";

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

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">
            <span className="num">Ch. 01</span> ABOUT THE COMPANY
          </div>
          <h2>Knowledge is the tool. Technology is the lever.</h2>
          <p>
            <strong>Gnana CompuTech Solutions Pvt. Ltd.</strong> is a
            Bengaluru based education technology company built on one idea:{' '}
            <em>gnana</em> knowledge is the most powerful tool for
            transformation. We work at the seam between traditional
            classrooms and the digital, skill-oriented world students are
            actually walking into.
          </p>
        </div>

        <div className="about-cols">
          <div className="ledger-card">
            <h3>Who we are</h3>
            <p>
              A team of educators, engineers and digital-learning
              specialists. We don't outsource the teaching to the
              technology we build tools that make good teaching scale,
              backed by real classroom experience on the other side of the
              screen.
            </p>
          </div>
          <div className="ledger-card">
            <h3>What we do</h3>
            <ul>
              <li>
                <strong>Smart School &amp; College ERPs</strong> — Attendance, exams, fees, automated
              </li>
              <li>
                <strong>Exam &amp; IQ Platforms</strong> — Gamified testing with live analytics
              </li>
              <li>
                <strong>Internships &amp; Projects</strong> — Certified, industry mapped programs
              </li>
              <li>
                <strong>Teacher Training</strong> — Modern pedagogy and ed-tech fluency
              </li>
              <li>
                <strong>Custom Software</strong> — Tailor made academic tools, built to fit
              </li>
            </ul>
          </div>
        </div>

      <div className="recognition-panel">
    

  <h3>Registered & Recognized</h3>

  <p>
    Gnana CompuTech Solutions is a registered enterprise committed to
    delivering trusted education technology services while complying with
    Government of India standards and regulatory requirements.
  </p>

  <div className="recognition-grid">
    <div className="recognition-card">
      <img
        src={msmeImg}
        alt="MSME Registered"
      />

      <div>
        <h4>MSME Registered</h4>

        <span>
          Registered under the Ministry of Micro, Small &
          Medium Enterprises, Government of India.
        </span>
      </div>
    </div>

    <div className="recognition-card">
      <img
        src={mcaImg}
        alt="Ministry of Corporate Affairs"
      />

      <div>
        <h4>Ministry of Corporate Affairs</h4>

        <span>
          Incorporated and recognized under the Ministry
          of Corporate Affairs, Government of India.
        </span>
      </div>
    </div>
  </div>
</div>

        <div className="mv-grid">
          <div className="ledger-card">
            <h3>Our mission</h3>
            <p>
              To equip institutions and individuals with reliable,
              accessible digital tools that grow skill and sharpen academic
              outcomes — without adding friction to the people using them.
            </p>
          </div>
          <div className="ledger-card">
            <h3>Our vision</h3>
            <p>
              To be a national reference point for ed-tech done well:
              training, platforms and transformation that make every
              student and institution genuinely future ready.
            </p>
          </div>
        </div>

        <div className="about-bottom">
          <div>
            <div className="about-photo">
              <img
                src={aboutTeamPhoto}
                alt="Gnana CompuTech team at an institutional felicitation event"
              />
            </div>
            <div className="photo-caption">
              FIELD NOTE — Institutional partner engagement, Bengaluru
            </div>
          </div>

          <ul className="values-list">
            {VALUES.map((value) => (
              <li key={value.tick}>
                <span className="tick">{value.tick}</span>
                <div>
                  <strong>{value.title}</strong>
                  <span>{value.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
