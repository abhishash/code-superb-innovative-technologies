import type { Metadata } from "next";
import Link from "next/link";
import CopyrightNotice from "../copyright-notice";

const services = [
  {
    number: "01",
    id: "product-engineering",
    title: "Product engineering",
    summary:
      "Turn a promising idea into a polished product, or give an existing one a stronger next chapter.",
    details:
      "We bring product thinking, design, and engineering together from day one. The result is software grounded in real user needs, built to work reliably, and ready to evolve.",
    capabilities: [
      "Product discovery and technical direction",
      "Web application design and development",
      "Prototypes, MVPs, and new product launches",
      "Modernization and ongoing product development",
    ],
  },
  {
    number: "02",
    id: "ai-automation",
    title: "AI & automation",
    summary:
      "Make complex work feel simpler with practical AI and automation tailored to your business.",
    details:
      "We help identify where intelligent tools can make a meaningful difference, then design and build solutions that fit your workflows and keep people in control.",
    capabilities: [
      "AI opportunity discovery and prototyping",
      "AI-powered product features and integrations",
      "Workflow automation and intelligent assistants",
      "Evaluation, guardrails, and continuous improvement",
    ],
  },
  {
    number: "03",
    id: "cloud-platforms",
    title: "Cloud & platforms",
    summary:
      "Create a secure, dependable foundation that performs today and grows with what comes next.",
    details:
      "From architecture through operations, we make cloud platforms easier to trust and easier to scale—without adding complexity for its own sake.",
    capabilities: [
      "Cloud architecture and platform engineering",
      "Infrastructure automation and deployment pipelines",
      "Reliability, performance, and observability",
      "Security-minded modernization and scaling",
    ],
  },
];

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
);

export const metadata: Metadata = {
  title: "Services — Product Engineering, AI & Cloud | Codex Pro",
  description:
    "Explore Codex Pro services: product engineering, practical AI and automation, and secure cloud platforms—delivered by one collaborative senior team.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="services-page">
        <section className="services-hero page-wrap">
          <div className="about-eyebrow">
            <span className="eyebrow-dot" />
            PRODUCT · AI · CLOUD
          </div>
          <h1>
            The right people.
            <br />
            <em>For what comes next.</em>
          </h1>
          <p>
            One senior team to help you find clarity, build with confidence,
            and move your product forward.
          </p>
          <a className="text-link" href="#our-services">
            Explore our services <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="services-list page-wrap" id="our-services">
          {services.map((service) => (
            <article
              className="service-detail"
              id={service.id}
              key={service.id}
            >
              <div className="service-detail-heading">
                <span className="service-number">{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
              <div className="service-detail-copy">
                <p>{service.details}</p>
                <span className="section-kicker">HOW WE CAN HELP</span>
                <ul>
                  {service.capabilities.map((capability) => (
                    <li key={capability}>
                      <span aria-hidden="true">↗</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                className="service-detail-cta"
                href={`mailto:hello@codexpro.dev?subject=${encodeURIComponent(`Let's talk about ${service.title}`)}`}
              >
                Let&apos;s talk about {service.title} <ArrowUpRight />
              </a>
            </article>
          ))}
        </section>

        <section className="services-cta page-wrap">
          <div>
            <span className="section-kicker">START WITH A CONVERSATION</span>
            <h2>
              Not sure where
              <br />
              to <em>begin?</em>
            </h2>
            <p>
              Bring us the challenge. We&apos;ll help you find a thoughtful way
              forward.
            </p>
          </div>
          <a className="button button-lime" href="mailto:hello@codexpro.dev">
            Tell us what you&apos;re building <ArrowUpRight />
          </a>
          <span className="about-cta-spark" aria-hidden="true">
            ✳
          </span>
        </section>
      </main>

      
    </>
  );
}
