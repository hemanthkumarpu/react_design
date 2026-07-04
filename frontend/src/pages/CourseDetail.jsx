import { Link, useParams, Navigate } from 'react-router-dom'
import { getCourseBySlug, getRelatedCourses } from '../data/courses.js'
import { useEffect, useState } from 'react'

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}
function LevelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 20h18" />
      <path d="M6 20V12M12 20V6M18 20v-9" />
    </svg>
  )
}
function ModeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease' }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function CurriculumModule({ module, index, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="accordion-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="accordion-title">{module.title}</span>
        <span className="accordion-hours">{module.hours}</span>
        <ChevronIcon open={isOpen} />
      </button>
      {isOpen && (
        <div className="accordion-body">
          <ul>
            {module.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <button className="accordion-trigger faq-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="accordion-title">{faq.q}</span>
        <ChevronIcon open={isOpen} />
      </button>
      {isOpen && (
        <div className="accordion-body">
          <p>{faq.a}</p>
        </div>
      )}
    </div>
  )
}

function RelatedCourseCard({ course }) {
  return (
    <Link to={`/courses/${course.slug}`} className="related-card">
      <div className="course-tag">{course.tag}</div>
      <h4>{course.title}</h4>
      <div className="related-meta">
        <span>
          <ClockIcon />
          {course.hours}
        </span>
      </div>
      <span className="related-link">View course →</span>
    </Link>
  )
}

export default function CourseDetail() {
  const { slug } = useParams()
    useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, [slug]);
  const course = getCourseBySlug(slug)
  const [openModule, setOpenModule] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  if (!course) {
    return <Navigate to="/#courses" replace />
  }

  const related = getRelatedCourses(course.slug, 3)
  const totalTopics = course.curriculum.reduce((sum, m) => sum + m.topics.length, 0)

  return (
    <>
      {/* ---------- BREADCRUMB + HERO ---------- */}
      <section className="course-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#courses">Courses</Link>
            <span>/</span>
            <span className="current">{course.title}</span>
          </div>

          <div className="course-hero-grid">
            <div>
              <div className="eyebrow">
                <span className="num">{course.tag}</span> COURSE OVERVIEW
              </div>
              <h1>{course.title}</h1>
              <p className="course-hero-lede">{course.summary}</p>

              <div className="course-hero-meta">
                <span>
                  <ClockIcon />
                  {course.hours} total
                </span>
                <span>
                  <LevelIcon />
                  {course.level}
                </span>
                <span>
                  <ModeIcon />
                  {course.mode}
                </span>
                <span>
                  <CalendarIcon />
                  Next batch {course.nextBatch}
                </span>
              </div>

              <div className="hero-ctas">
                <Link to="/#contact" className="btn btn-primary">
                  Enroll Now
                </Link>
                <a href="#" className="btn btn-ghost">
                  ↓ Download Brochure
                </a>
              </div>
            </div>

            <aside className="fee-card">
              <div className="fee-card-top">
                <span className="fee-label">Program Fee</span>
                <span className="fee-amount">{course.fee}</span>
                <span className="fee-note">One-time · installments available</span>
              </div>
              <ul className="fee-facts">
                <li>
                  <span>Duration</span>
                  <strong>{course.hours}</strong>
                </li>
                <li>
                  <span>Format</span>
                  <strong>Cohort-based</strong>
                </li>
                <li>
                  <span>Next batch</span>
                  <strong>{course.nextBatch}</strong>
                </li>
                <li>
                  <span>Seats</span>
                  <strong>{course.seats}</strong>
                </li>
                <li>
                  <span>Certificate</span>
                  <strong>On completion</strong>
                </li>
              </ul>
              <Link to="/#contact" className="btn btn-amber" style={{ width: '100%', justifyContent: 'center' }}>
                Reserve My Seat
              </Link>
              <a href="#" className="fee-brochure-link">
                ↓ Download full syllabus (PDF)
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- WHAT YOU'LL LEARN ---------- */}
      <section className="alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <span className="num">Ch. 01</span> WHAT YOU'LL LEARN
            </div>
            <h2>Skills you'll walk out with.</h2>
            <p>Outcomes this course is explicitly designed to produce — not just topics it touches on.</p>
          </div>
          <div className="outcomes-grid">
            {course.outcomes.map((outcome) => (
              <div className="outcome-item" key={outcome}>
                <span className="outcome-check">
                  <CheckIcon />
                </span>
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CURRICULUM ---------- */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <span className="num">Ch. 02</span> CURRICULUM
            </div>
            <h2>{course.curriculum.length} modules, {totalTopics} topics, one capstone.</h2>
            <p>Expand a module for its detailed topic list. The final module is always a mentored capstone project.</p>
          </div>
          <div className="accordion">
            {course.curriculum.map((module, i) => (
              <CurriculumModule
                key={module.title}
                module={module}
                index={i}
                isOpen={openModule === i}
                onToggle={() => setOpenModule(openModule === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PREREQUISITES / TOOLS / PROJECT ---------- */}
      <section className="alt">
        <div className="wrap">
          <div className="req-grid">
            <div className="ledger-card">
              <h3>Who this course is for</h3>
              <ul>
                {course.prerequisites.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="ledger-card">
              <h3>Tools &amp; technologies</h3>
              <div className="tool-chips">
                {course.tools.map((tool) => (
                  <span className="tool-chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
              <h3 style={{ marginTop: '26px' }}>Capstone project</h3>
              <p style={{ fontSize: '15px', color: 'var(--slate)' }}>{course.project}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CERTIFICATION BAND ---------- */}
      <section className="cert-band">
        <div className="wrap cert-band-inner">
          <div>
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>
              <span className="num">Ch. 03</span> CERTIFICATION
            </div>
            <h2>A certificate that means something to the employer reading it.</h2>
            <p>
              Every course ends with a mentored capstone reviewed by a panel, not a quiz. Your certificate references
              the project you actually shipped, so it holds up in an interview.
            </p>
          </div>
          <ul className="cert-list">
            <li>Issued by Gnana CompuTech Solutions Pvt. Ltd.</li>
            <li>Requires capstone project completion &amp; review</li>
            <li>Verifiable certificate ID, shareable on LinkedIn</li>
            <li>Resume review &amp; mock interviews included</li>
          </ul>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <span className="num">Ch. 04</span> FAQ
            </div>
            <h2>Common questions about this course.</h2>
          </div>
          <div className="accordion faq-accordion">
            {course.faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- RELATED COURSES ---------- */}
      <section className="alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <span className="num">Ch. 05</span> KEEP EXPLORING
            </div>
            <h2>Other tracks students pair with this one.</h2>
          </div>
          <div className="related-grid">
            {related.map((c) => (
              <RelatedCourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="final-cta">
        <div className="wrap final-cta-inner">
          <div>
            <h2>Ready to start {course.title}?</h2>
            <p>Talk to admissions about the {course.nextBatch} batch — seats are cohort-limited to {course.seats.split(' / ')[0]}.</p>
          </div>
          <div className="hero-ctas" style={{ marginBottom: 0 }}>
            <Link to="/#contact" className="btn btn-primary">
              Enroll Now
            </Link>
            <a href="#" className="btn btn-ghost">
              ↓ Download Brochure
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
