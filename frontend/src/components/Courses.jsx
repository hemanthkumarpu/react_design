import { Link } from 'react-router-dom'
import { COURSES } from '../data/courses.js'

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function CohortIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  )
}

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-tag">{course.tag}</div>
      <h3>{course.title}</h3>
      <div className="course-meta">
        <span>
          <ClockIcon />
          {course.hours}
        </span>
        <span>
          <CohortIcon />
          Cohort-based
        </span>
      </div>
      <p className="course-desc">{course.desc}</p>
      <div className="course-actions">
        <Link to={`/courses/${course.slug}`} className="view">
          View syllabus →
        </Link>
        <a href="#" className="brochure">
          ↓ Brochure
        </a>
      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">
            <span className="num">Ch. 02</span> COURSES &amp; INTERNSHIPS
          </div>
          <h2>Certified, project led, industry mapped.</h2>
          <p>
            Every track pairs structured coursework with a real, mentored
            project — so a certificate means the same thing to us that it
            does to the employer reading it.
          </p>
        </div>

        <div className="course-grid">
          {COURSES.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
