"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const interactiveSelector =
  'a, button, [role="button"], [data-cursor-hover]';

function isInteractive(target: EventTarget | null) {
  return target instanceof Element && target.closest(interactiveSelector) !== null;
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const x = useSpring(pointerX, { damping: 28, stiffness: 420, mass: 0.35 });
  const y = useSpring(pointerY, { damping: 28, stiffness: 420, mass: 0.35 });

  useEffect(() => {
    const pointerMedia = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!pointerMedia.matches || motionMedia.matches) return;

    document.documentElement.classList.add("has-custom-cursor");
    setEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };
    const handlePointerOver = (event: PointerEvent) => {
      setHovering(isInteractive(event.target));
    };
    const handlePointerOut = (event: PointerEvent) => {
      if (!isInteractive(event.relatedTarget)) setHovering(false);
    };
    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);
    const handleWindowBlur = () => {
      setPressed(false);
      setHovering(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [pointerX, pointerY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`custom-cursor${hovering ? " is-hovering" : ""}${pressed ? " is-pressed" : ""}`}
      style={{ x, y }}
      animate={{ scale: pressed ? 0.82 : hovering ? 1.12 : 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
    >
      <span className="custom-cursor-orb">
        <span className="custom-cursor-dot" />
        <span className="custom-cursor-label">GO</span>
      </span>
    </motion.div>
  );
}
