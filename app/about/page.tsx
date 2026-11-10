import type { Metadata } from "next";
import Link from "next/link";
import CopyrightNotice from "../copyright-notice";

const principles = [
  {
    number: "01",
    title: "Clarity before code",
    description:
      "We make space to understand the real problem, align on what matters, and find a clear path forward.",
  },
  {
    number: "02",
    title: "Craft with purpose",
    description:
      "Good details add up. We pair considered design with dependable engineering to make products feel effortless.",
  },
  {
    number: "03",
    title: "Better, together",
    description:
      "The best work happens in the open. You collaborate directly with the people shaping and building your product.",
  },
];

const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      "We get to know your goals, your people, and what is getting in the way.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "Together, we turn the opportunity into a focused plan and a shared picture of success.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "A small, senior team works in the open, making useful progress you can see.",
  },
  {
    number: "04",
    title: "Learn",
    description:
      "We launch thoughtfully, listen closely, and help your product keep getting better.",
  },
];

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
);

export const metadata: Metadata = {
  title: "About Codex Pro — Thoughtful Software, Meaningful Progress",
  description:
    "Meet Codex Pro, an independent software studio partnering with ambitious teams to make digital products clear, useful, and ready for what comes next.",
};

export default function AboutPage() {
  return (
    <>
      <main className="about-page">
        <section className="about-hero page-wrap">
          <div className="about-hero-copy">
            <div className="about-eyebrow">
              <span className="eyebrow-dot" />
              AN INDEPENDENT SOFTWARE STUDIO
            </div>
            <h1>
              Thoughtful software.
              <br />
              <em>Meaningful progress.</em>
            </h1>
            <p>
              We bring clear thinking, considered design, and senior engineering
              to ambitious teams ready to make their next move.
            </p>
            <div className="about-hero-actions">
              <a
                className="button button-dark"
                href="mailto:hello@codexpro.dev"
              >
                Get to know us <ArrowUpRight />
              </a>
              <a className="text-link" href="#principles">
                What we believe <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="about-hero-art">
            <div className="about-art-orbit about-art-orbit-one" />
            <div className="about-art-orbit about-art-orbit-two" />
            <div className="about-art-spark" aria-hidden="true">
              ✳
            </div>
            <div className="about-art-card">
              <span className="about-art-label">A GOOD PARTNERSHIP</span>
              <h2>
                Clear minds.
                <br />
                <em>Good work.</em>
              </h2>
              <div className="about-art-rule" />
              <div className="about-art-points">
                <span>
                  <i /> Shared understanding
                </span>
                <span>
                  <i /> Thoughtful decisions
                </span>
                <span>
                  <i /> Progress you can feel
                </span>
              </div>
            </div>
            <span className="about-art-caption">Better, built together</span>
          </div>
        </section>

        <section className="about-story">
          <div className="page-wrap about-story-inner">
            <div>
              <span className="section-kicker">THE WORK BEHIND THE WORK</span>
              <h2>
                Good software
                <br />
                is a <em>team sport.</em>
              </h2>
            </div>
            <div className="about-story-copy">
              <p>
                The most useful technology starts with people: the people using
                it, the people building it, and the people working to make a
                business better.
              </p>
              <p>
                That is why we work as an extension of your team. No unnecessary
                hand-offs or mystery around the process—just close collaboration
                and thoughtful work, from the first conversation onward.
              </p>
              <Link className="text-link" href="/#services">
                See how we can help <ArrowUpRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-principles page-wrap" id="principles">
          <div className="about-section-heading">
            <div>
              <span className="section-kicker">WHAT WE BELIEVE</span>
              <h2>
                A few things
                <br />
                we won&apos;t compromise.
              </h2>
            </div>
            <p>
              How we work matters as much as what we make. These principles
              shape every partnership and every product.
            </p>
          </div>
          <div className="about-principle-grid">
            {principles.map((principle) => (
              <article className="about-principle-card" key={principle.number}>
                <span className="about-principle-number">
                  {principle.number}
                </span>
                <div className="about-principle-mark" aria-hidden="true">
                  ✳
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-process" id="approach">
          <div className="page-wrap about-process-inner">
            <div className="about-process-heading">
              <span className="section-kicker">A BETTER WAY TO BUILD</span>
              <h2>
                From first
                <br />
                question to <em>what&apos;s next.</em>
              </h2>
              <p>
                Good work is a series of small, considered steps. We keep the
                process collaborative, useful, and moving forward.
              </p>
            </div>
            <div className="about-process-steps">
              {steps.map((step) => (
                <article className="about-process-step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta page-wrap">
          <div>
            <span className="section-kicker">
              GOOD THINGS START WITH A CONVERSATION
            </span>
            <h2>
              Have a challenge
              <br />
              worth <em>solving?</em>
            </h2>
          </div>
          <a className="button button-lime" href="mailto:hello@codexpro.dev">
            Let&apos;s talk <ArrowUpRight />
          </a>
          <span className="about-cta-spark" aria-hidden="true">
            ✳
          </span>
        </section>
      </main>

      
    </>
  );
}
