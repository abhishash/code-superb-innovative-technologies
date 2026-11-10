"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const founders = [
  {
    name: "Shivam Singh",
    role: "Founder & Strategy",
    initial: "S",
    description:
      "Shapes product thinking and helps teams align ambition with the clearest possible path to impact.",
  },
  {
    name: "Ananya Rao",
    role: "Founder & Product",
    initial: "A",
    description:
      "Leads product direction, user experience, and strategic decisions that turn vision into momentum.",
  },
  {
    name: "Vikram Yadav",
    role: "Founder & Engineering",
    initial: "V",
    description:
      "Builds reliable systems, product infrastructure, and technical foundations that support sustainable growth.",
  },
  {
    name: "Nikita Sharma",
    role: "Founder & Growth",
    initial: "N",
    description:
      "Connects strategic opportunity with go-to-market decisions and long-term value creation.",
  },
];

export default function FounderCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const founder = founders[activeIndex];

  function showFounder(nextIndex: number) {
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  }

  function showPrevious() {
    showFounder((activeIndex - 1 + founders.length) % founders.length);
  }

  function showNext() {
    showFounder((activeIndex + 1) % founders.length);
  }

  return (
    <div
      className="founders-carousel"
      role="region"
      aria-label="Meet our founders"
      aria-roledescription="carousel"
    >
      <div className="founder-carousel-visual" aria-hidden="true">
        <div className="founder-visual-orbit founder-visual-orbit-one" />
        <div className="founder-visual-orbit founder-visual-orbit-two" />
        <span className="founder-visual-spark">✳</span>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            className="founder-portrait"
            key={founder.initial}
            custom={direction}
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : direction * 24,
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : direction * -24,
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
          >
            {founder.initial}
          </motion.div>
        </AnimatePresence>
        <span className="founder-visual-caption">THE PEOPLE BEHIND THE WORK</span>
      </div>

      <div className="founder-carousel-content">
        <span className="section-kicker">FOUNDING TEAM</span>
        <div className="founder-carousel-slide">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.article
              className="founder-carousel-copy"
              key={founder.name}
              custom={direction}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : direction * 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: shouldReduceMotion ? 0 : direction * -22 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
            >
              <span className="founder-role">{founder.role}</span>
              <h3>{founder.name}</h3>
              <p>{founder.description}</p>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="founder-carousel-controls">
          <span className="founder-carousel-count">
            {String(activeIndex + 1).padStart(2, "0")}
            <span aria-hidden="true"> / </span>
            {String(founders.length).padStart(2, "0")}
          </span>
          <div className="founder-carousel-dots" aria-label="Choose a founder">
            {founders.map((item, index) => (
              <button
                type="button"
                key={item.name}
                aria-label={`Show ${item.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => showFounder(index)}
              />
            ))}
          </div>
          <div className="founder-carousel-arrows">
            <button type="button" aria-label="Previous founder" onClick={showPrevious}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" aria-label="Next founder" onClick={showNext}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
