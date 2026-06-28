import Image from "next/image";
import ContactForm from "./components/ContactForm";

const services = [
  {
    title: "Business websites",
    text: "Clean, responsive websites for independent businesses that need to explain what they do and turn visitors into enquiries.",
  },
  {
    title: "Portfolio and CV sites",
    text: "Personal websites that present your experience, projects, strengths, and contact details in a confident, easy-to-scan format.",
  },
  {
    title: "Refreshes and fixes",
    text: "Focused improvements to existing websites, from page structure and mobile polish to performance, copy, and conversion flow.",
  },
];

const skills = [
  "React",
  "Next.js",
  "Responsive design",
  "HTML & CSS",
  "Website copy",
  "SEO basics",
  "Performance",
  "Hosting setup",
];

const timeline = [
  {
    role: "Freelance website builder",
    period: "Now",
    detail:
      "Designing and building practical websites for people who need a sharp online presence without agency overhead.",
  },
  {
    role: "Front-end development focus",
    period: "Recent work",
    detail:
      "Building React interfaces, structured pages, reusable components, and responsive layouts that feel reliable on every screen.",
  },
  {
    role: "Business-minded delivery",
    period: "Ongoing",
    detail:
      "Translating goals into clear pages, sensible navigation, useful calls to action, and maintainable content.",
  },
];

const packages = [
  {
    name: "Launch",
    price: "From £750",
    detail: "A focused one-page website for a new service, personal brand, or small business.",
  },
  {
    name: "Business",
    price: "From £1,500",
    detail: "A multi-page website with stronger structure, service pages, and enquiry paths.",
  },
  {
    name: "Improve",
    price: "From £350",
    detail: "Targeted updates to an existing website, scoped around the highest-impact fixes.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Owain Stringer home">
          OS
        </a>
        <nav>
          <a href="#cv">CV</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          src="/hero-workspace.png"
          alt="Modern desk setup with a laptop showing a website layout and planning notes"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">CV and freelance website builder</p>
          <h1>Owain Stringer</h1>
          <p className="hero-copy">
            I build clear, responsive websites for freelancers, small businesses,
            and people who want their experience to feel credible online.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button primary" href="#contact">
              Start a project
            </a>
            <a className="button secondary" href="#cv">
              View CV
            </a>
          </div>
        </div>
      </section>

      <section className="intro section-band" aria-label="Profile summary">
        <div className="section-inner intro-grid">
          <div>
            <p className="eyebrow">Profile</p>
            <h2>A practical web partner for useful, good-looking sites.</h2>
          </div>
          <p>
            This site works as both a personal CV and a business front door. It
            gives visitors a quick read on skills, services, packages, process,
            and how to get in touch for a website project.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Freelance services</p>
            <h2>Websites that are easy to understand and easy to act on.</h2>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" id="cv">
        <div className="section-inner cv-grid">
          <div>
            <p className="eyebrow">CV snapshot</p>
            <h2>Front-end skills with a business-first way of working.</h2>
            <p className="section-copy">
              Replace this starter copy with your exact roles, employers,
              qualifications, and project wins when you are ready.
            </p>
            <div className="skill-list" aria-label="Skills">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="timeline" aria-label="Experience timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.role}>
                <p>{item.period}</p>
                <h3>{item.role}</h3>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Process</p>
            <h2>Simple steps from idea to live website.</h2>
          </div>
          <ol className="process-list">
            <li>
              <strong>Shape</strong>
              <span>Clarify audience, pages, goals, content, and the result the site needs to create.</span>
            </li>
            <li>
              <strong>Build</strong>
              <span>Create responsive pages in React and Next.js with clean structure and fast loading.</span>
            </li>
            <li>
              <strong>Launch</strong>
              <span>Connect domain, hosting, analytics basics, and hand over a site you can keep using.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="section packages-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Packages</p>
            <h2>Clear starting points for different website needs.</h2>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <article className="package" key={item.name}>
                <p>{item.name}</p>
                <h3>{item.price}</h3>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-inner contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Tell me what you want the website to do.</h2>
            <p className="section-copy">
              Send a few details and your email app will open with a ready-made
              enquiry. Update the address in the code to your real inbox.
            </p>
            <a className="text-link" href="mailto:hello@yourdomain.com">
              hello@yourdomain.com
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
