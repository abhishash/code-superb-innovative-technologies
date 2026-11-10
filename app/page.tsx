import type { Metadata } from "next";
import Link from "next/link";
import CopyrightNotice from "./copyright-notice";
import FounderCarousel from "./founder-carousel";

export const metadata: Metadata = {
  title: "Web, Mobile & CRM Development Services | Codex Pro",
  description:
    "Codex Pro builds custom web applications, mobile apps, and CRM platforms, with SEO, metadata, and ongoing product maintenance for growing businesses.",
  keywords: [
    "web development",
    "web application development",
    "mobile app development",
    "CRM development",
    "SEO services",
    "technical SEO",
    "product maintenance",
    "Codex Pro",
  ],
  openGraph: {
    title: "Web, Mobile & CRM Development Services | Codex Pro",
    description:
      "Build and grow your digital product with custom web, mobile, and CRM development, plus SEO and ongoing maintenance.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Web, Mobile & CRM Development Services | Codex Pro",
    description:
      "Custom web, mobile, and CRM development, plus SEO and ongoing product maintenance.",
  },
};

const services = [
  {
    number: "01",
    id: "product-engineering",
    title: "Product engineering",
    description:
      "From first sketch to launch day, we turn ambitious product ideas into dependable software people love to use.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="9" width="34" height="27" rx="4" />
        <path d="M17 41h14M24 36v5M17 20l-5 4 5 4M31 20l5 4-5 4M27 18l-5 12" />
      </svg>
    ),
  },
  {
    number: "02",
    id: "ai-automation",
    title: "AI & automation",
    description:
      "Make the complex feel effortless with practical AI and thoughtful automation built around your business.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6v8M24 34v8M6 24h8M34 24h8M11.3 11.3l5.7 5.7m14 14 5.7 5.7m0-25.4L31 17m-14 14-5.7 5.7" />
        <circle cx="24" cy="24" r="10" />
        <circle cx="24" cy="24" r="3" />
      </svg>
    ),
  },
  {
    number: "03",
    id: "cloud-platforms",
    title: "Cloud & platforms",
    description:
      "Build a secure, scalable foundation that keeps your systems fast today and ready for what comes next.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 35h21a8 8 0 0 0 1-15.9A12 12 0 0 0 13 17a9 9 0 0 0 1 18Z" />
        <path d="m19 27 5-5 5 5m-5-5v12" />
      </svg>
    ),
  },
];

const technologies = [
  { name: "Laravel", category: "Backend", description: "Robust web applications and APIs." },
  { name: "Node.js", category: "Backend", description: "Scalable services and real-time backends." },
  { name: "React", category: "Frontend", description: "Interactive, component-driven interfaces." },
  { name: "Next.js", category: "Frontend", description: "Fast, full-stack React experiences." },
  { name: "CodeIgniter", category: "Backend", description: "Lightweight PHP applications and APIs." },
  { name: "React Native", category: "Mobile", description: "Cross-platform apps for iOS and Android." },
  { name: "WordPress", category: "CMS", description: "Flexible content-managed websites." },
  { name: "PHP", category: "Backend", description: "Custom server-side applications and integrations." },
  { name: "Socket.IO", category: "Real-time", description: "Live updates and two-way communication." },
  { name: "WebRTC", category: "Real-time", description: "Real-time audio, video, and data experiences." },
];

const additionalServices = [
  { 
    number: "02",
    title: "Web application development",
    description:
      "Custom web apps and business platforms built around your users, workflows, and goals.",
  },
  {
    number: "03",
    title: "Mobile development",
    description:
      "iOS and Android apps that make everyday tasks easier for your customers and teams.",
  },
  {
    number: "04",
    title: "CRM development",
    description:
      "Custom CRM tools that bring customer data, sales workflows, and team activity together.",
  },
  {
    number: "05",
    title: "Service provider solutions",
    description:
      "Booking, scheduling, and customer portals built around the way your service business works.",
  },
  {
    number: "06",
    title: "SEO & metadata",
    description:
      "Technical SEO, page titles, meta descriptions, and structured metadata to improve discoverability and sharing.",
  },
  {
    number: "07",
    title: "Product maintenance",
    description:
      "Ongoing updates, monitoring, and improvements to keep your product reliable and secure.",
  },
];

const projects = [
  {
    number: "01",
    category: "WEB APP · CRM",
    title: "Customer operations hub",
    description:
      "A central workspace concept for managing customer relationships, team tasks, and business insights.",
    preview: "dashboard",
  },
  {
    number: "02",
    category: "MOBILE · FIELD SERVICE",
    title: "Service team companion",
    description:
      "A mobile product concept for helping service teams coordinate schedules, visits, and customer updates.",
    preview: "mobile",
  },
  {
    number: "03",
    category: "REAL-TIME · WEBRTC",
    title: "Connected collaboration",
    description:
      "A real-time collaboration concept that brings video, messaging, and shared work into one experience.",
    preview: "realtime",
  },
];

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
);

export default function Home() {
  return (
    <>
     

      <main>
        <section className="hero page-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              PRODUCT ENGINEERING · AI · CLOUD
            </div>
            <h1>
              Make your next
              <br />
              big move <span>happen.</span>
            </h1>
            <p className="hero-description">
              We design, build, and scale digital products that turn ambitious
              ideas into your next competitive edge.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="mailto:hello@codexpro.dev">
                Tell us what you&apos;re building <ArrowUpRight />
              </a>
              <Link className="text-link" href="/services">
                Explore our services <span aria-hidden="true">↓</span>
              </Link>
            </div>
            <div className="hero-proof">
              <span className="proof-symbol" aria-hidden="true">✳</span>
              <p>
                A senior team.
                <br />
                <strong>Hands-on from day one.</strong>
              </p>
            </div>
          </div>

          <div className="hero-art" aria-label="Product analytics dashboard illustration">
            <div className="art-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="dashboard">
              <div className="dashboard-top">
                <div className="dashboard-brand">
                  <span className="mini-mark">n</span>
                  northstar
                </div>
                <span className="dashboard-menu">•••</span>
              </div>
              <div className="dashboard-title">
                <div>
                  <span className="muted-label">YOUR PRODUCT, IN PROGRESS</span>
                  <h2>A clearer path to launch</h2>
                </div>
                <span className="avatar">A</span>
              </div>
              <div className="dashboard-metrics">
                <div className="metric-card">
                  <span className="muted-label">PRODUCT EXPERIENCE</span>
                  <div className="metric-value">Thoughtful</div>
                  <span className="metric-up">Designed around people</span>
                </div>
                <div className="metric-card">
                  <span className="muted-label">TECH FOUNDATION</span>
                  <div className="metric-value">Ready to grow</div>
                  <span className="metric-up">Built for what&apos;s next</span>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-heading">
                  <div>
                    <span className="muted-label">FROM FIRST IDEA TO LAUNCH</span>
                    <strong>Good things are taking shape.</strong>
                  </div>
                  <span className="chart-period">This year⌄</span>
                </div>
                <div className="chart">
                  <div className="chart-grid">
                    <span />
                    <span />
                    <span />
                  </div>
                  <svg viewBox="0 0 420 130" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#b8ee4b" stopOpacity=".33" />
                        <stop offset="100%" stopColor="#b8ee4b" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 104 C28 98 30 88 60 92 S94 75 119 82 S151 61 178 69 S212 47 240 57 S275 42 300 48 S339 24 361 35 S397 13 420 17 V130 H0Z"
                      fill="url(#chartFill)"
                    />
                    <path
                      d="M0 104 C28 98 30 88 60 92 S94 75 119 82 S151 61 178 69 S212 47 240 57 S275 42 300 48 S339 24 361 35 S397 13 420 17"
                      fill="none"
                      stroke="#a8df43"
                      strokeWidth="3"
                    />
                    <circle cx="361" cy="35" r="4" fill="#a8df43" />
                  </svg>
                </div>
                <div className="chart-labels">
                  <span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
                </div>
              </div>
              <div className="dashboard-footer">
                <span><i /> Thoughtfully engineered</span>
                <span>Built together</span>
              </div>
            </div>
            <div className="floating-note">
              <span className="note-icon">✳</span>
              <span>              <strong>Made for momentum</strong><small>From first idea to launch</small></span>
              <span className="note-check">✓</span>
            </div>
            <span className="art-caption">A little glimpse of what&apos;s possible ↗</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Our focus">
          <div className="page-wrap trust-inner">
            <span className="trust-label">YOUR PRODUCT TEAM, EXTENDED</span>
            <span>Product strategy</span>
            <i />
            <span>Design & engineering</span>
            <i />
            <span>AI & automation</span>
            <i />
            <span>Cloud platforms</span>
          </div>
        </section>

        <section className="services-section page-wrap" id="services">
          <div className="section-heading">
            <div>
              <span className="section-kicker">HOW WE HELP</span>
              <h2>One team.<br /><em>End-to-end delivery.</em></h2>
            </div>
            <p>
              Bring us a challenge, a rough idea, or a product that needs a
              better next chapter. We&apos;ll bring the strategy, design, and
              engineering to move it forward.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  aria-label={`Explore ${service.title}`}
                >
                  <ArrowUpRight />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="additional-services page-wrap" aria-labelledby="additional-services-heading">
          <div className="section-heading additional-services-heading">
            <div>
              <span className="section-kicker">MORE WAYS WE CAN HELP</span>
              <h2 id="additional-services-heading">
                Services built
                <br />
                around <em>your needs.</em>
              </h2>
            </div>
            <p>
              From a first launch to the long-term care of your product, we can
              support the work at every stage.
            </p>
          </div>
          <div className="additional-service-list">
            {additionalServices.map((service) => (
              <article className="additional-service-card" key={service.number}>
                <span className="additional-service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <a
                  href={`mailto:hello@codexpro.dev?subject=${encodeURIComponent(`Let's talk about ${service.title}`)}`}
                  aria-label={`Ask us about ${service.title}`}
                >
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="technology-section page-wrap" aria-labelledby="technology-heading">
          <div className="section-heading technology-heading">
            <div>
              <span className="section-kicker">OUR TECH TOOLKIT</span>
              <h2 id="technology-heading">
                The right tools
                <br />
                for <em>the right job.</em>
              </h2>
            </div>
            <p>
              We choose technologies to fit your product, team, and goals—not
              the other way around. Here are some of the tools we work with.
            </p>
          </div>
          <div className="technology-grid">
            {technologies.map((technology, index) => (
              <article className="technology-card" key={technology.name}>
                <div className="technology-card-top">
                  <span className="technology-mark" aria-hidden="true">
                    {technology.name.slice(0, 2)}
                  </span>
                  <span className="technology-category">{technology.category}</span>
                </div>
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
                <span className="technology-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section page-wrap" id="projects" aria-labelledby="projects-heading">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-kicker">SELECTED PROJECT CONCEPTS</span>
              <h2 id="projects-heading">
                Ideas made
                <br />
                <em>into experiences.</em>
              </h2>
            </div>
            <p>
              A glimpse at the kinds of digital products we can design and build.
              Each project starts with your goals and is shaped around your users.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div
                  className={`project-preview project-preview-${project.preview}`}
                  aria-hidden="true"
                >
                  {project.preview === "dashboard" && (
                    <div className="project-dashboard">
                      <div className="project-window-bar"><i /><i /><i /></div>
                      <div className="project-dashboard-body">
                        <div className="project-sidebar"><i /><i /><i /><i /></div>
                        <div className="project-dashboard-main">
                          <span />
                          <div className="project-stat-row"><i /><i /><i /></div>
                          <div className="project-chart"><i /><i /><i /><i /><i /><i /></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {project.preview === "mobile" && (
                    <div className="project-phone">
                      <div className="project-phone-speaker" />
                      <span className="project-phone-label" />
                      <div className="project-phone-map"><i /></div>
                      <div className="project-phone-line" />
                      <div className="project-phone-line short" />
                      <div className="project-phone-action" />
                    </div>
                  )}
                  {project.preview === "realtime" && (
                    <div className="project-call-window">
                      <div className="project-call-screen"><span>CC</span></div>
                      <div className="project-call-panel">
                        <i /><i /><i />
                      </div>
                      <div className="project-call-controls"><i /><i /><i /></div>
                    </div>
                  )}
                  <span className="project-sample-label">SAMPLE CONCEPT</span>
                </div>
                <div className="project-card-content">
                  <div className="project-card-meta">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link
                    href="/contact"
                    className="project-link"
                    aria-label={`Discuss a project like ${project.title}`}
                  >
                    Discuss a project like this <ArrowUpRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-action">
            <Link className="button button-dark" href="/products">
              Explore our products <ArrowUpRight />
            </Link>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="page-wrap about-inner">
            <div className="about-stamp" aria-hidden="true">
              <span>THOUGHTFUL BY DESIGN</span>
              <b>✳</b>
              <span>BUILT TO MAKE A DIFFERENCE</span>
            </div>
            <div className="about-copy">
              <span className="section-kicker">YOUR PARTNERS IN THE WORK</span>
              <h2>Built with you.<br /><em>Not just for you.</em></h2>
              <p>
                We&apos;re an independent software studio for teams ready to
                make their next move. We bring clear thinking, considered
                design, and senior engineering to every stage of the journey.
              </p>
              <Link className="text-link" href="/about#approach">
                How we work <ArrowUpRight />
              </Link>
            </div>
            <div className="about-aside">
              <div className="aside-line" />
              <p>
                No hand-offs between departments. You work directly with the
                people designing and building your product—with clarity at
                every step.
              </p>
              <div className="about-stats">
                <div><strong>One team</strong><span>strategy through launch</span></div>
                <div><strong>Built to fit</strong><span>your goals, your context</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="founders-section page-wrap">
          <div className="section-heading founders-heading">
            <div>
              <span className="section-kicker">THE PEOPLE BEHIND THE WORK</span>
              <h2>
                Our <em>founders.</em>
              </h2>
            </div>
            <p>
              A small team of operators, builders, and strategists who care deeply
              about making technology useful, human, and genuinely valuable.
            </p>
          </div>

          <FounderCarousel />
        </section>

        <section className="purpose-section page-wrap">
          <div className="purpose-grid">
            <article className="purpose-card">
              <span className="purpose-number">01</span>
              <h3>Mission</h3>
              <p>
                To turn complex challenges into practical, high-impact digital
                solutions that help people and businesses move forward with clarity.
              </p>
            </article>

            <article className="purpose-card purpose-card-featured">
              <span className="purpose-number">02</span>
              <h3>Vision</h3>
              <p>
                To be the trusted technology partner that helps ambitious teams grow,
                innovate, and lead with confidence in an ever-changing world.
              </p>
            </article>

            <article className="purpose-card">
              <span className="purpose-number">03</span>
              <h3>Value</h3>
              <p>
                We believe thoughtful design, senior execution, and honest
                collaboration create products that are useful, dependable, and built to last.
              </p>
            </article>
          </div>
        </section>

        <section className="approach-section page-wrap" id="work">
          <div>
            <span className="section-kicker">A GOOD PLACE TO START</span>
            <h2>What could we<br />build together?</h2>
          </div>
          <a className="button button-lime" href="mailto:hello@codexpro.dev">
            Let&apos;s talk <ArrowUpRight />
          </a>
          <span className="approach-spark" aria-hidden="true">✳</span>
        </section>
      </main>

      
    </>
  );
}
