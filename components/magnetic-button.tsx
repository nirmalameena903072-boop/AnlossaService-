"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** VengeanceUI magnetic button — adapted: cursor-attracted spring pull. */
export default function MagneticButton({
  children, href, className = "", variant = "saffron", onClick,
}: {
  children: React.ReactNode; href?: string; className?: string; variant?: "saffron" | "ghost" | "dark"; onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.25 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.38);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const styles =
    variant === "saffron"
      ? "bg-saffron text-obsidian shadow-[0_0_36px_rgba(250,204,21,0.35)] hover:shadow-[0_0_52px_rgba(250,204,21,0.55)]"
      : variant === "dark"
      ? "bg-obsidian text-white hover:bg-carbon"
      : "bg-white/5 text-white border border-white/15 backdrop-blur hover:border-saffron/60 hover:text-saffron";

  const Tag = href ? motion.a : motion.button;
  const common = {
    ref: ref as any, onMouseMove: onMove, onMouseLeave: onLeave, onClick,
    style: { x: sx, y: sy },
    whileTap: { scale: 0.96 },
    className: `gpu inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-[12.5px] font-extrabold leading-tight tracking-[0.08em] uppercase transition-shadow duration-300 ${styles} ${className}`,
    ...(href ? { href, target: "_blank", rel: "noreferrer" } : {}),
  };
  return <Tag {...common}>{children}</Tag>;
}
