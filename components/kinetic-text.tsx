"use client";
import { motion } from "framer-motion";

/** Skiper UI kinetic typography — word-by-word rise + blur reveal on scroll. */
export function KineticWords({
  text, className = "", delay = 0, as: _as,
}: { text: string; className?: string; delay?: number; as?: string }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="mr-[0.21em] inline-block align-bottom">
          <span className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
              whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: delay + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          </span>
        </span>
      ))}
    </span>
  );
}

export function Reveal({
  children, className = "", delay = 0, y = 28,
}: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
