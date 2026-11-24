"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/** VengeanceUI 3D perspective tilt card — adapted with glare + spring return. */
export default function TiltCard({
  children, className = "", max = 10,
}: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5), py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 160, damping: 18 });
  const glareX = useTransform(px, [0, 1], ["-120%", "120%"]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect(); if (!r) return;
    px.set((e.clientX - r.left) / r.width); py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { px.set(0.5); py.set(0.5); };

  return (
    <div className="perspective-900 h-full">
      <motion.div
        ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`gpu group relative h-full overflow-hidden rounded-[28px] ${className}`}
      >
        {children}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.14) 50%, transparent 60%)", x: glareX }} />
      </motion.div>
    </div>
  );
}
