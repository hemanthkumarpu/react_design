import React from 'react'
import './services.css'

const SERVICES = [
  {
    title: 'Smart School & College ERP',
    desc: 'Custom academic ERP with attendance, exams, fees, analytics and parent communication built in.',
    points: ['Lower administrative load', 'Full operational transparency', 'Real-time data access'],
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path d="M3 9h18" />
        <path d="M8 4v14" />
      </svg>
    ),
  },
  {
    title: 'Exam & IQ Test Platforms',
    desc: 'Gamified platforms for quizzes, Olympiads and entrance prep, scored and reported in real time.',
    points: ['Live scoring & analytics', 'Adaptive difficulty', 'Student-facing dashboards'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Internships & Real Projects',
    desc: 'Skill-based training across Python, Java Full Stack, Data Analytics, AI/ML, IoT and cybersecurity.',
    points: ['Certification on completion', 'Real project implementation', 'Career-aligned outcomes'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Teacher Digital Empowerment',
    desc: 'Hands-on training in LMS platforms, smart boards and content creation for faculty.',
    points: ['Stronger classroom interaction', 'Hybrid & remote-ready teaching', 'Train-the-trainer model'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'Student Enrichment Programs',
    desc: 'Coding bootcamps, quizzes, counselling and innovation challenges outside the syllabus.',
    points: ['Creativity & teamwork', 'Real-world problem-solving', 'Certification & recognition'],
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
  {
    title: 'Custom Software Development',
    desc: 'Secure, scalable apps for attendance, exams, alumni and administration, tailored to your institution.',
    points: ['Cloud-enabled & secure', 'UX-optimised interfaces', 'End-to-end maintenance'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
]

function ServiceCard({ service, reverse }) {
  return (
    <article className={`overflow-hidden rounded-[28px] border border-[#dcd2b4]/80 bg-white p-8 shadow-[0_20px_45px_rgba(16,35,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(16,35,61,0.12)] ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e4eeea] text-[#16705f] ${reverse ? 'lg:ml-auto' : ''}`}>
          <div className="h-7 w-7 [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-current [&>svg]:fill-none [&>svg]:stroke-[1.4]">
            {service.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[1.2rem] font-semibold text-[#10233d] sm:text-[1.35rem]">{service.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-7 text-[#3b4250]">{service.desc}</p>
          <ul className="mt-5 space-y-3">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-[#10233d]">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d9a441]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <main className="min-h-screen bg-[#f7f3e8] text-[#3b4250]">
      <section className="border-b border-[#dcd2b4]/80 bg-[radial-gradient(circle_at_88%_12%,_#eadfc0_0%,_transparent_55%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            
            <h1 className="text-4xl font-semibold leading-tight text-[#10233d] sm:text-5xl lg:text-6xl">
              Institution-ready technology services for learning organizations
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3b4250]">
              Our full-services page gives a dedicated overview of the systems,
              platforms and training programs we build for schools, colleges and
              education teams.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
