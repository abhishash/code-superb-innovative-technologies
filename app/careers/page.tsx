import type { Metadata } from "next";
import Link from "next/link";
import CareerApplicationForm from "./career-application-form";
import CopyrightNotice from "../copyright-notice";

const principles = [
  {
    number: "01",
    title: "Work that matters",
    description:
      "Help turn real business challenges into useful digital products and lasting progress.",
  },
  {
    number: "02",
    title: "People over hand-offs",
    description:
      "Work directly with a thoughtful, collaborative team that shares context and ownership.",
  },
  {
    number: "03",
    title: "Keep getting better",
    description:
      "Make room for curiosity, considered craft, and learning from every project.",
  },
];

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
);

export const metadata: Metadata = {
  title: "Careers at Codex Pro — Build Thoughtful Software",
  description:
    "Explore careers at Codex Pro. Join a collaborative team building useful digital products with thoughtful design and dependable engineering.",
};

export default function CareersPage() {
  return (
    <>
      <main className="careers-page">
        <section className="careers-hero page-wrap">
          <div className="careers-hero-copy">
            <div className="about-eyebrow">
              <span className="eyebrow-dot" />
              CAREERS AT CODEX PRO
            </div>
            <h1>
              Do thoughtful work.
              <br />
              <em>Make real progress.</em>
            </h1>
            <p>
              We bring product thinking, design, and engineering together to
              solve meaningful problems. If you care about doing useful work
              with good people, we&apos;d like to hear from you.
            </p>
            <div className="careers-hero-actions">
              <a className="button button-dark" href="#opportunities">
                Explore opportunities <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href="mailto:hello@codexpro.dev?subject=Career%20enquiry"
              >
                Introduce yourself <ArrowUpRight />
              </a>
            </div>
          </div>

          <div className="careers-hero-art" aria-label="Illustration of collaborative work">
            <div className="careers-art-orbit careers-art-orbit-one" />
            <div className="careers-art-orbit careers-art-orbit-two" />
            <div className="careers-art-spark" aria-hidden="true">✳</div>
            <div className="careers-art-card">
              <span>GOOD WORK, BUILT TOGETHER</span>
              <strong>Curious minds.<br /><em>Thoughtful makers.</em></strong>
              <div><i /> Strategy</div>
              <div><i /> Design</div>
              <div><i /> Engineering</div>
            </div>
            <span className="careers-art-caption">Better, built together</span>
          </div>
        </section>

        <section className="careers-principles page-wrap">
          <div className="careers-section-heading">
            <div>
              <span className="section-kicker">WHY CODEX PRO</span>
              <h2>
                A small team.
                <br />
                <em>Room to do your best work.</em>
              </h2>
            </div>
            <p>
              We value clear communication, shared ownership, and a high bar
              for the work—without losing sight of the people doing it.
            </p>
          </div>
          <div className="careers-principle-grid">
            {principles.map((principle) => (
              <article className="careers-principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="careers-process">
          <div className="page-wrap careers-process-inner">
            <div>
              <span className="section-kicker">HOW WE WORK</span>
              <h2>
                Thoughtful by design.
                <br />
                <em>Collaborative by default.</em>
              </h2>
            </div>
            <p>
              We keep teams close to the problem and the people using what we
              build. Ideas are shared early, decisions are made together, and
              everyone has room to contribute their perspective.
            </p>
          </div>
        </section>

        <section className="careers-opportunities page-wrap" id="opportunities">
          <div className="careers-section-heading">
            <div>
              <span className="section-kicker">OPPORTUNITIES</span>
              <h2>
                Your next chapter
                <br />
                could start <em>here.</em>
              </h2>
            </div>
            <p>
              We don&apos;t have any listed openings right now. We&apos;re always glad
              to meet people who care about building thoughtful software.
            </p>
          </div>
          <article className="careers-open-call">
            <div className="careers-open-call-mark" aria-hidden="true">✳</div>
            <div>
              <span>GENERAL INTEREST</span>
              <h3>No matching role today?</h3>
              <p>
                Tell us a little about your experience and the kind of work you
                would love to do. We&apos;ll keep your note in mind as our team grows.
              </p>
            </div>
            <a className="button button-dark" href="#career-application">
              Apply with your profile <span aria-hidden="true">↓</span>
            </a>
          </article>
        </section>

        <section
          className="career-application-section page-wrap"
          id="career-application"
        >
          <div className="contact-form-copy">
            <span className="section-kicker">GENERAL APPLICATION</span>
            <h2>
              Share your <em>story.</em>
            </h2>
            <p>
              Tell us about yourself, the kind of role you&apos;re looking for,
              and include your resume. We&apos;ll be in touch if there&apos;s a fit.
            </p>
          </div>
          <CareerApplicationForm />
        </section>

        <section className="careers-cta page-wrap">
          <div>
            <span className="section-kicker">LET&apos;S START A CONVERSATION</span>
            <h2>
              Good things happen
              <br />
              when we <em>build together.</em>
            </h2>
          </div>
          <Link className="button button-lime" href="/contact">
            Get in touch <ArrowUpRight />
          </Link>
          <span className="about-cta-spark" aria-hidden="true">✳</span>
        </section>
      </main>

      
    </>
  );
}
