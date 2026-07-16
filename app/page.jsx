"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "./components/ContactForm";

const content = {
  en: {
    languageLabel: "Language",
    languageOptions: {
      english: "English",
      welsh: "Welsh",
    },
    navLabel: "Primary navigation",
    homeLabel: "Cadryx home",
    nav: {
      services: "Services",
      approach: "Approach",
      packages: "Packages",
      contact: "Contact",
    },
    heroImageAlt:
      "Modern desk setup with a laptop showing a website layout and planning notes",
    hero: {
      eyebrow: "Business website studio",
      copy: "Clear, responsive websites for independent businesses that need to look credible, explain their services, and turn visitors into useful enquiries.",
      actionsLabel: "Hero actions",
      primaryAction: "Start a project",
      secondaryAction: "View services",
    },
    intro: {
      label: "Business website summary",
      eyebrow: "Business websites",
      title: "A practical web partner for clear, useful sites.",
      copy: "Cadryx designs, builds, and manages business websites with a simple aim: help customers understand what you offer, trust what they see, and take the next step without friction.",
    },
    services: {
      eyebrow: "Cadryx services",
      title: "Websites that are easy to understand and easy to act on.",
      items: [
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
        {
          title: "Welsh website versions",
          text: "Add a Welsh-language version of your website so customers can switch between English and Welsh with clear, consistent content.",
        },
      ],
    },
    approach: {
      eyebrow: "Approach",
      title: "Built around the way customers choose a business.",
      copy: "A business website should answer real questions, guide people to the right action, and feel polished on every screen.",
      outcomesLabel: "Skills",
      outcomes: [
        "Clear services",
        "Stronger enquiries",
        "Mobile polish",
        "Fast loading",
        "Search-ready pages",
        "Simple navigation",
        "Trust signals",
        "Easy handover",
      ],
      prioritiesLabel: "Business website priorities",
      priorities: [
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
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Simple steps from idea to live website.",
      steps: [
        {
          title: "Shape",
          text: "Clarify audience, pages, goals, content, and the result the site needs to create.",
        },
        {
          title: "Build",
          text: "Create responsive pages in React and Next.js with clean structure and fast loading.",
        },
        {
          title: "Launch",
          text: "Connect domain, hosting, analytics basics, and hand over a site you can keep using.",
        },
      ],
    },
    packages: {
      eyebrow: "Packages",
      title: "Clear starting points for different website needs.",
      items: [
        {
          name: "Launch",
          price: "From £1000",
          detail:
            "A focused one-page website for a new business, local service, or single clear offer.",
        },
        {
          name: "Business",
          price: "From £2000",
          detail:
            "A multi-page website with stronger structure, service pages, and enquiry paths.",
        },
        {
          name: "Improve",
          price: "From £50/hr",
          detail:
            "Targeted updates to an existing website, scoped around the highest-impact fixes.",
        },
        {
          name: "Manage",
          price: "From £100/month",
          detail:
            "Optional monthly website management for hosting, domain support, updates, checks, small content changes, and practical help after launch.",
        },
        {
          name: "Welsh version",
          price: "From £350",
          detail:
            "Add a Welsh-language version to an existing site, including translated page copy, navigation, forms, and a simple language switcher.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell Cadryx what you want the website to do.",
      copy: "Send a few details and your email app will open with a ready-made enquiry about the business, pages, goals, and timeline.",
    },
    form: {
      name: "Name",
      email: "Email",
      project: "Project type",
      projectPlaceholder: "A short note about the site, pages, and goals",
      budget: "Budget",
      timeline: "Timeline",
      budgetOptions: [
        "Not sure yet",
        "Under £1,000",
        "£1,000 to £2,500",
        "£2,500 to £5,000",
        "£5,000+",
      ],
      timelineOptions: ["Flexible", "This month", "Next 6 weeks", "Next 3 months"],
      submit: "Send enquiry",
      status: "Opening your email app with the project details.",
      emailSubject: "Website project enquiry from",
      emailBodyLabels: {
        name: "Name",
        email: "Email",
        budget: "Budget",
        timeline: "Timeline",
        project: "Project",
      },
    },
  },
  cy: {
    languageLabel: "Iaith",
    languageOptions: {
      english: "Saesneg",
      welsh: "Cymraeg",
    },
    navLabel: "Prif lywio",
    homeLabel: "Hafan Cadryx",
    nav: {
      services: "Gwasanaethau",
      approach: "Dull",
      packages: "Pecynnau",
      contact: "Cysylltu",
    },
    heroImageAlt:
      "Desg fodern gyda gliniadur yn dangos cynllun gwefan a nodiadau cynllunio",
    hero: {
      eyebrow: "Stiwdio gwefannau busnes",
      copy: "Gwefannau clir ac ymatebol i fusnesau annibynnol sydd angen edrych yn gredadwy, esbonio eu gwasanaethau, a throi ymwelwyr yn ymholiadau defnyddiol.",
      actionsLabel: "Camau hero",
      primaryAction: "Dechrau prosiect",
      secondaryAction: "Gweld gwasanaethau",
    },
    intro: {
      label: "Crynodeb gwefan busnes",
      eyebrow: "Gwefannau busnes",
      title: "Partner gwe ymarferol ar gyfer safleoedd clir a defnyddiol.",
      copy: "Mae Cadryx yn dylunio, adeiladu, a rheoli gwefannau busnes gyda nod syml: helpu cwsmeriaid i ddeall beth rydych yn ei gynnig, ymddiried yn yr hyn maen nhw'n ei weld, a chymryd y cam nesaf heb drafferth.",
    },
    services: {
      eyebrow: "Gwasanaethau Cadryx",
      title: "Gwefannau sy'n hawdd eu deall ac yn hawdd gweithredu arnynt.",
      items: [
        {
          title: "Gwefannau busnesau bach",
          text: "Safleoedd glan ac ymatebol sy'n esbonio eich cynnig, yn adeiladu ymddiriedaeth yn gyflym, ac yn ei gwneud hi'n hawdd i ymwelwyr holi.",
        },
        {
          title: "Tudalennau gwasanaeth",
          text: "Tudalennau penodol ar gyfer gwasanaethau, lleoliadau, neu gynigion fel bod cwsmeriaid yn gallu deall y ffit cyn cysylltu.",
        },
        {
          title: "Adnewyddu a thrwsio",
          text: "Gwelliannau penodol i wefannau presennol, o strwythur tudalennau a gorffeniad symudol i berfformiad, copi, a llif trosi.",
        },
        {
          title: "Fersiynau Cymraeg o wefannau",
          text: "Ychwanegu fersiwn Gymraeg o'ch gwefan fel bod cwsmeriaid yn gallu newid rhwng Saesneg a Cymraeg gyda chynnwys clir a chyson.",
        },
      ],
    },
    approach: {
      eyebrow: "Dull",
      title: "Wedi'i adeiladu o gwmpas y ffordd mae cwsmeriaid yn dewis busnes.",
      copy: "Dylai gwefan busnes ateb cwestiynau go iawn, arwain pobl at y cam cywir, a theimlo'n raenus ar bob sgrin.",
      outcomesLabel: "Sgiliau",
      outcomes: [
        "Gwasanaethau clir",
        "Ymholiadau cryfach",
        "Gorffeniad symudol",
        "Llwytho cyflym",
        "Tudalennau parod i chwilio",
        "Llywio syml",
        "Arwyddion ymddiriedaeth",
        "Trosglwyddo hawdd",
      ],
      prioritiesLabel: "Blaenoriaethau gwefan busnes",
      priorities: [
        {
          role: "Eglurder yn gyntaf",
          period: "Lleoli",
          detail:
            "Troi beth rydych yn ei wneud, pwy mae'n ei helpu, a pham mae'n bwysig yn safle y gall ymwelwyr ei ddeall yn gyflym.",
        },
        {
          role: "Wedi'i adeiladu ar gyfer ymholiadau",
          period: "Trosi",
          detail:
            "Llunio tudalennau o gwmpas y cwestiynau sydd gan gwsmeriaid cyn iddynt ffonio, e-bostio, archebu, neu ofyn am ddyfynbris.",
        },
        {
          role: "Barod i redeg",
          period: "Lansio",
          detail:
            "Sefydlu gwefan gyflym ac ymatebol gyda strwythur synhwyrol, cynnal, cymorth parth, a throsglwyddo ymarferol.",
        },
      ],
    },
    process: {
      eyebrow: "Proses",
      title: "Camau syml o syniad i wefan fyw.",
      steps: [
        {
          title: "Llunio",
          text: "Egluro cynulleidfa, tudalennau, nodau, cynnwys, a'r canlyniad sydd angen i'r safle ei greu.",
        },
        {
          title: "Adeiladu",
          text: "Creu tudalennau ymatebol yn React a Next.js gyda strwythur glan a llwytho cyflym.",
        },
        {
          title: "Lansio",
          text: "Cysylltu parth, cynnal, pethau sylfaenol dadansoddeg, a throsglwyddo safle y gallwch barhau i'w ddefnyddio.",
        },
      ],
    },
    packages: {
      eyebrow: "Pecynnau",
      title: "Mannau cychwyn clir ar gyfer anghenion gwefan gwahanol.",
      items: [
        {
          name: "Lansio",
          price: "O £1000",
          detail:
            "Gwefan un dudalen benodol ar gyfer busnes newydd, gwasanaeth lleol, neu gynnig clir unigol.",
        },
        {
          name: "Busnes",
          price: "O £2000",
          detail:
            "Gwefan aml-dudalen gyda strwythur cryfach, tudalennau gwasanaeth, a llwybrau ymholi.",
        },
        {
          name: "Gwella",
          price: "O £50/awr",
          detail:
            "Diweddariadau wedi'u targedu i wefan bresennol, wedi'u cwmpasu o gwmpas y trwsiadau mwyaf effeithiol.",
        },
        {
          name: "Rheoli",
          price: "O £100/mis",
          detail:
            "Rheoli gwefan misol dewisol ar gyfer cynnal, cymorth parth, diweddariadau, gwiriadau, newidiadau cynnwys bach, a chymorth ymarferol ar ol lansio.",
        },
        {
          name: "Fersiwn Gymraeg",
          price: "O £350",
          detail:
            "Ychwanegu fersiwn Gymraeg at safle presennol, gan gynnwys copi tudalennau wedi'i gyfieithu, llywio, ffurflenni, a dewis iaith syml.",
        },
      ],
    },
    contact: {
      eyebrow: "Cysylltu",
      title: "Dywedwch wrth Cadryx beth rydych am i'r wefan ei wneud.",
      copy: "Anfonwch ychydig o fanylion a bydd eich ap e-bost yn agor gydag ymholiad parod am y busnes, tudalennau, nodau, a'r amserlen.",
    },
    form: {
      name: "Enw",
      email: "E-bost",
      project: "Math o brosiect",
      projectPlaceholder: "Nodyn byr am y safle, tudalennau, a nodau",
      budget: "Cyllideb",
      timeline: "Amserlen",
      budgetOptions: [
        "Ddim yn siwr eto",
        "Dan £1,000",
        "£1,000 i £2,500",
        "£2,500 i £5,000",
        "£5,000+",
      ],
      timelineOptions: ["Hyblyg", "Y mis hwn", "Y 6 wythnos nesaf", "Y 3 mis nesaf"],
      submit: "Anfon ymholiad",
      status: "Yn agor eich ap e-bost gyda manylion y prosiect.",
      emailSubject: "Ymholiad prosiect gwefan gan",
      emailBodyLabels: {
        name: "Enw",
        email: "E-bost",
        budget: "Cyllideb",
        timeline: "Amserlen",
        project: "Prosiect",
      },
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState("en");
  const copy = content[language];

  return (
    <main lang={language}>
      <header className="site-header" aria-label={copy.navLabel}>
        <a className="brand" href="#top" aria-label={copy.homeLabel}>
          <Image
            src="/cadryx-mark.png"
            alt=""
            width={419}
            height={357}
            priority
            className="brand-logo"
          />
          <span className="brand-name">Cadryx</span>
        </a>
        <div className="header-actions">
          <nav>
            <a href="#services">{copy.nav.services}</a>
            <a href="#approach">{copy.nav.approach}</a>
            <a href="#packages">{copy.nav.packages}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </nav>
          <div className="language-switcher" aria-label={copy.languageLabel}>
            <button
              type="button"
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              {copy.languageOptions.english}
            </button>
            <button
              type="button"
              aria-pressed={language === "cy"}
              onClick={() => setLanguage("cy")}
            >
              {copy.languageOptions.welsh}
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <Image
          src="/hero-workspace.png"
          alt={copy.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>Cadryx</h1>
          <p className="hero-copy">{copy.hero.copy}</p>
          <div className="hero-actions" aria-label={copy.hero.actionsLabel}>
            <a className="button primary" href="#contact">
              {copy.hero.primaryAction}
            </a>
            <a className="button secondary" href="#services">
              {copy.hero.secondaryAction}
            </a>
          </div>
        </div>
      </section>

      <section className="intro section-band" aria-label={copy.intro.label}>
        <div className="section-inner intro-grid">
          <div>
            <p className="eyebrow">{copy.intro.eyebrow}</p>
            <h2>{copy.intro.title}</h2>
          </div>
          <p>{copy.intro.copy}</p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">{copy.services.eyebrow}</p>
            <h2>{copy.services.title}</h2>
          </div>
          <div className="card-grid">
            {copy.services.items.map((service) => (
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
            <p className="eyebrow">{copy.approach.eyebrow}</p>
            <h2>{copy.approach.title}</h2>
            <p className="section-copy">{copy.approach.copy}</p>
            <div className="skill-list" aria-label={copy.approach.outcomesLabel}>
              {copy.approach.outcomes.map((outcome) => (
                <span key={outcome}>{outcome}</span>
              ))}
            </div>
          </div>
          <div className="timeline" aria-label={copy.approach.prioritiesLabel}>
            {copy.approach.priorities.map((item) => (
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
            <p className="eyebrow">{copy.process.eyebrow}</p>
            <h2>{copy.process.title}</h2>
          </div>
          <ol className="process-list">
            {copy.process.steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section packages-section" id="packages">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">{copy.packages.eyebrow}</p>
            <h2>{copy.packages.title}</h2>
          </div>
          <div className="package-grid">
            {copy.packages.items.map((item) => (
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
            <p className="eyebrow">{copy.contact.eyebrow}</p>
            <h2>{copy.contact.title}</h2>
            <p className="section-copy">{copy.contact.copy}</p>
            <a className="text-link" href="mailto:OwainCadryx@gmail.com">
              OwainCadryx@gmail.com
            </a>
          </div>
          <ContactForm copy={copy.form} />
        </div>
      </section>
    </main>
  );
}
