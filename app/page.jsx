import Image from "next/image";
import ContactForm from "./components/ContactForm";

const services = [
  {
    title: "Small business websites",
    text: "Clean, responsive sites that explain your offer, build trust quickly, and make it easy for visitors to enquire.",
  },
  {
    title: "Service pages",
    text: "Focused pages for specific services, locations, or offers so customers can understand the fit before they get in touch.",
  },
  {
    title: "Refreshes and fixes",
    text: "Focused improvements to existing websites, from page structure and mobile polish to performance, copy, and conversion flow.",
  },
];

const outcomes = [
  "Clear services",
  "Stronger enquiries",
  "Mobile polish",
  "Fast loading",
  "Search-ready pages",
  "Simple navigation",
  "Trust signals",
  "Easy handover",
];

const businessFocus = [
  {
    role: "Clarity first",
    period: "Positioning",
    detail:
      "Turn what you do, who it helps, and why it matters into a site visitors can understand quickly.",
  },
  {
    role: "Built for enquiries",
    period: "Conversion",
    detail:
      "Shape pages around the questions customers have before they call, email, book, or request a quote.",
  },
  {
    role: "Ready to run",
    period: "Launch",
    detail:
      "Set up a fast, responsive website with sensible structure, hosting, domain support, and practical handover.",
  },
];

const packages = [
  {
    name: "Launch",
    price: "From £1000",
    detail: "A focused one-page website for a new business, local service, or single clear offer.",
  },
  {
    name: "Business",
    price: "From £2000",
    detail: "A multi-page website with stronger structure, service pages, and enquiry paths.",
  },
  {
    name: "Improve",
    price: "From £50/hr",
    detail: "Targeted updates to an existing website, scoped around the highest-impact fixes.",
  },
  {
    name: "Manage",
    price: "From £100/month",
    detail: "Optional monthly website management for hosting, domain support, updates, checks, small content changes, and practical help after launch.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Cadryx home">
          <span className="brand-mark">C</span>
          <span className="brand-name">Cadryx</span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#packages">Packages</a>
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
          <p className="eyebrow">Business website studio</p>
          <h1>Cadryx</h1>
          <p className="hero-copy">
            Clear, responsive websites for independent businesses that need to
            look credible, explain their services, and turn visitors into useful
            enquiries.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button primary" href="#contact">
              Start a project
            </a>
            <a className="button secondary" href="#services">
              View services
            </a>
          </div>
        </div>
      </section>

      <section className="intro section-band" aria-label="Business website summary">
        <div className="section-inner intro-grid">
          <div>
            <p className="eyebrow">Business websites</p>
            <h2>A practical web partner for clear, useful sites.</h2>
          </div>
          <p>
            Cadryx designs, builds, and manages business websites with a simple
            aim: help customers understand what you offer, trust what they see,
            and take the next step without friction.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Cadryx services</p>
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

      <section className="section muted" id="approach">
        <div className="section-inner approach-grid">
          <div>
            <p className="eyebrow">Approach</p>
            <h2>Built around the way customers choose a business.</h2>
            <p className="section-copy">
              A business website should answer real questions, guide people to
              the right action, and feel polished on every screen.
            </p>
            <div className="skill-list" aria-label="Skills">
              {outcomes.map((outcome) => (
                <span key={outcome}>{outcome}</span>
              ))}
            </div>
          </div>
          <div className="timeline" aria-label="Business website priorities">
            {businessFocus.map((item) => (
              <article className="timeline-item" key={item.role}>
                <p>{item.period}</p>
                <h3>{item.role}</h3>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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

      <section className="section packages-section" id="packages">
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
            <h2>Tell Cadryx what you want the website to do.</h2>
            <p className="section-copy">
              Send a few details and your email app will open with a ready-made
              enquiry about the business, pages, goals, and timeline.
            </p>
            <a className="text-link" href="mailto:owainguto@icloud.com">
              owainguto@icloud.com
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
