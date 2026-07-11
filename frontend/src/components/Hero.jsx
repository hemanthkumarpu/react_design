import heroImage from "../assets/logo.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="num">Est. Bengaluru</span> EDUCATION × TECHNOLOGY
          </div>
          <h1>
            Where <em>Gnana</em> meets
            <br />
            the digital age.
          </h1>
          <p className="hero-lede">
            We build the software, training and systems that carry Indian
            institutions from the chalkboard to the cloud — ERPs, exam
            platforms, teacher training and industry ready internships,
            engineered by educators who code.
          </p>
          <div className="hero-ctas">
            <a href="#courses" className="btn btn-primary">
              Explore Courses
            </a>
            <a href="#contact" className="btn btn-ghost">
              Partner With Us
            </a>
          </div>
        </div>

        <div className="hero-art">
          <img
            src={heroImage}
            alt="Gnana educational illustration"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}
