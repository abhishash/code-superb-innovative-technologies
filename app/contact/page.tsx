import type { Metadata } from "next";
import Link from "next/link";
import CopyrightNotice from "../copyright-notice";

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
);

export const metadata: Metadata = {
  title: "Contact Codex Pro — Start a Conversation",
  description:
    "Reach out to Codex Pro to talk about your product, AI initiative, or cloud platform needs.",
};

export default function ContactPage() {
  return (
    <>
      <main className="contact-page">
        <section className="contact-hero page-wrap">
          <div className="contact-hero-copy">
            <div className="about-eyebrow">
              <span className="eyebrow-dot" />
              START WITH A CONVERSATION
            </div>
            <h1>
              Let&apos;s talk about
              <br />
              <em>what&apos;s next.</em>
            </h1>
            <p>
              Whether you have a clear brief or just a rough idea, we&apos;d love to
              hear what you&apos;re building and where you want to go next.
            </p>
            <div className="contact-hero-actions">
              <a className="button button-dark" href="mailto:hello@codexpro.dev">
                Email the studio <ArrowUpRight />
              </a>
              <a className="text-link" href="#contact-options">
                See how we can help <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-symbol" aria-hidden="true">
                ✳
              </span>
              <p>
                Usually replies within 1–2 business days.
                <br />
                <strong>Thoughtful next steps, fast.</strong>
              </p>
            </div>
          </div>

          <div className="contact-hero-panel" aria-label="Contact options panel">
            <div className="contact-panel-orbit contact-panel-orbit-one" />
            <div className="contact-panel-orbit contact-panel-orbit-two" />
            <div className="contact-panel-card">
              <span className="contact-panel-label">GET IN TOUCH</span>
              <h2>
                Good work starts with a clear conversation.
              </h2>
              <div className="contact-panel-rule" />
              <ul className="contact-panel-list">
                <li>
                  <span aria-hidden="true">✦</span>
                  Product strategy and discovery
                </li>
                <li>
                  <span aria-hidden="true">✦</span>
                  AI and automation opportunities
                </li>
                <li>
                  <span aria-hidden="true">✦</span>
                  Cloud foundations and modernization
                </li>
              </ul>
              <a
                className="contact-panel-cta"
                href="mailto:hello@codexpro.dev?subject=Let's%20talk%20about%20my%20project"
              >
                hello@codexpro.dev <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-info page-wrap" id="contact-options">
          <div className="contact-intro">
            <span className="section-kicker">FIND US & SAY HELLO</span>
            <h2>
              Let&apos;s make <em>something meaningful.</em>
            </h2>
            <p>
              We&apos;re here to help your business innovate, automate, and grow with
              custom software, cloud strategy, and AI-powered solutions built for
              your industry.
            </p>
          </div>

          <div className="contact-layout">
            <div className="map-card">
              <div className="map-card-heading">
                <div>
                  <span className="map-card-kicker">OUR LOCATION</span>
                  <h3>Noida, Uttar Pradesh</h3>
                  <p>Sector 201301, India</p>
                </div>
                <a
                  className="map-card-link"
                  href="https://www.google.com/maps/search/?api=1&query=Noida+Sector+201301+Uttar+Pradesh+India"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open map <ArrowUpRight />
                </a>
              </div>
              <iframe
                title="Noida Sector 201301 map"
                src="https://www.google.com/maps?q=Noida%20Sector%20201301%20Uttar%20Pradesh%20India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-details">
              <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Zm0-9.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Lucknow Office</h3>
                  <p>
                    Founder Code Technology Pvt. Ltd.
                    <br />
                    4th Floor, Center for Advanced Studies, AKTU, Lucknow,
                    <br />
                    226031
                  </p>
                </div>
              </div>

              <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 8.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5l-8 6-8-6Zm0-2.5 8 6 8-6" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p><a href="mailto:info@foundercodes.com">info@foundercodes.com</a></p>
                </div>
              </div>

              <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 7.5V6a2 2 0 0 1 2-2h2l1.4 4.5-1.3 1.4A14 14 0 0 0 17.1 18l1.4-1.3L23 18v2a2 2 0 0 1-2 2h-1.5A16.5 16.5 0 0 1 3 7.5Z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Office Hours</h3>
                  <p>Mon - Sat: 9:00 am - 6:00 pm</p>
                </div>
              </div>

              <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Zm0-9.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Noida Office</h3>
                  <p>
                    Sector 201301, Noida,
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section page-wrap">
          <div className="contact-form-copy">
            <span className="section-kicker">CONTACT US</span>
            <h2>
              Tell us what you&apos;re <em>building.</em>
            </h2>
            <p>
              Share a few details and we&apos;ll get back to you with the right next
              steps for your project.
            </p>
          </div>

          <form className="contact-form" action="mailto:hello@codexpro.dev" method="post" encType="text/plain">
            <div className="form-row">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Your email" />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone
                <input type="tel" name="phone" placeholder="Your phone" />
              </label>
              <label>
                Subject
                <input type="text" name="subject" placeholder="Project or inquiry" />
              </label>
            </div>

            <label>
              Message
              <textarea name="message" rows={5} placeholder="Tell us about your goals, timeline, and what you need help with." />
            </label>

            <button type="submit" className="button button-dark">
              Send Message <ArrowUpRight />
            </button>
          </form>
        </section>

        <section className="contact-cta page-wrap">
          <div>
            <span className="section-kicker">GOOD THINGS START SMALL</span>
            <h2>
              Tell us where you are,
              <br />
              and we&apos;ll help you <em>figure out the next step.</em>
            </h2>
          </div>
          <a className="button button-lime" href="mailto:hello@codexpro.dev">
            Say hello <ArrowUpRight />
          </a>
          <span className="about-cta-spark" aria-hidden="true">
            ✳
          </span>
        </section>
      </main>
    </>
  );
}
