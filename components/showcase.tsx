"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import MagneticButton from "./magnetic-button";
import { Reveal, KineticWords } from "./kinetic-text";
import { DEMO_URL, waLink } from "@/lib/constants";

export default function Showcase() {
  const [flipped, setFlipped] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5), py = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 140, damping: 20 });
  const tiltY = useSpring(useTransform(px, [0, 1], [-9, 9]), { stiffness: 140, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = wrap.current?.getBoundingClientRect(); if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  return (
    <section id="showcase" className="relative overflow-hidden bg-obsidian py-24 md:py-32">
      <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-saffron/[0.07] blur-[130px]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-saffron/60" />
          <span className="font-grotesk text-[10px] font-bold tracking-[0.32em] text-saffron/80">LIVE IN PRODUCTION • 02</span>
        </Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-[11vw] font-extrabold leading-[0.94] tracking-display sm:text-5xl md:text-6xl">
            <KineticWords text="Not a mockup." /><br />
            <span className="text-white/35"><KineticWords text="A live client system." delay={0.12} /></span>
          </h2>
          <Reveal delay={0.2} className="max-w-xs text-[13px] leading-relaxed text-white/45">
            Flip the card to inspect the build. Then open the real deployment — el Sabroso Cafe™, Jhansi, running on ANLOSSA architecture.
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* FLIP CARD */}
          <div className="perspective-1200 lg:col-span-7" ref={wrap} onMouseMove={onMove} onMouseLeave={() => { px.set(0.5); py.set(0.5); }}>
            <motion.div style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }} className="gpu h-full">
              <motion.div
                onClick={() => setFlipped((v) => !v)}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative h-[520px] w-full cursor-pointer select-none sm:h-[470px]"
              >
                {/* FRONT */}
                <div className="backface-hidden absolute inset-0 overflow-hidden rounded-[30px] border border-white/[0.12] bg-carbon shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(250,204,21,0.18),transparent_55%)]" />
                  <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
                    <div className="flex items-start justify-between">
                      <span className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 font-grotesk text-[9px] font-bold tracking-[0.22em] text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseDot" /> LIVE • VERCEL
                      </span>
                      <span className="font-grotesk text-[9px] tracking-[0.24em] text-white/30">CASE / 001</span>
                    </div>

                    <div>
                      <p className="font-grotesk text-[10px] tracking-[0.3em] text-saffron">CAFE • JHANSI, UTTAR PRADESH</p>
                      <h3 className="mt-3 font-display text-[42px] font-extrabold leading-[0.92] tracking-display sm:text-6xl">
                        el Sabroso<br />Cafe™
                      </h3>
                      <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/50">
                        A 3D scroll-interactive cafe site with direct WhatsApp ordering, studio dish visuals and a digitised 60-item menu.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                      <div className="flex gap-6">
                        {[{ k: "0%", v: "COMMISSION" }, { k: "<0.8s", v: "LOAD" }, { k: "60", v: "ITEMS LIVE" }].map((s) => (
                          <div key={s.v}>
                            <p className="font-grotesk text-base font-bold text-saffron tnum">{s.k}</p>
                            <p className="font-grotesk text-[8px] tracking-[0.18em] text-white/35">{s.v}</p>
                          </div>
                        ))}
                      </div>
                      <span className="font-grotesk text-[9px] tracking-[0.2em] text-white/35">TAP TO FLIP ↺</span>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div style={{ transform: "rotateY(180deg)" }} className="backface-hidden absolute inset-0 overflow-hidden rounded-[30px] border border-saffron/25 bg-white text-obsidian shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)]">
                  <div className="grid-lines-light absolute inset-0 opacity-60" aria-hidden />
                  <div className="relative flex h-full flex-col p-7 md:p-9">
                    <div className="flex items-start justify-between">
                      <span className="rounded-full bg-obsidian px-3 py-1.5 font-grotesk text-[9px] font-bold tracking-[0.22em] text-saffron">BUILD SPEC</span>
                      <span className="font-grotesk text-[9px] tracking-[0.22em] text-obsidian/35">TAP TO FLIP ↺</span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-extrabold tracking-display md:text-3xl">What shipped.</h3>
                    <ul className="mt-4 grid flex-1 content-start gap-2 sm:gap-2.5 sm:grid-cols-2">
                      {[
                        "3D scroll hero stage",
                        "WhatsApp cart checkout",
                        "Table QR → live screen",
                        "Google Maps + review funnel",
                        "6 studio dish visuals",
                        "1 × 9:16 promo reel",
                        "60-item digitised menu",
                        "Sub-1s mobile load",
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2 text-[12px] font-semibold leading-snug text-obsidian/70 sm:items-center sm:text-[12.5px]">
                          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-saffron text-[9px] font-bold text-obsidian sm:mt-0">✓</span>
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a href={DEMO_URL} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full bg-obsidian px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.1em] text-white transition-transform hover:scale-[1.03]">
                        Launch Live 3D Demo ↗
                      </a>
                      <a href={waLink("Hi Anlossa Group, I want a website like el Sabroso Cafe for my cafe.")} target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-obsidian/50 underline decoration-saffron decoration-2 underline-offset-4 hover:text-obsidian">
                        Build mine
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* SIDE PANEL */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="h-full">
              <div className="flex h-full flex-col justify-between gap-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm md:p-8">
                <div>
                  <p className="font-grotesk text-[10px] tracking-[0.28em] text-white/35">OWNER OUTCOME</p>
                  <p className="mt-4 font-display text-[22px] font-extrabold leading-snug tracking-display text-white">
                    “Orders now come straight to my WhatsApp. I stopped paying commission on every plate.”
                  </p>
                  <p className="mt-3 text-[12px] text-white/40">— Founder, el Sabroso Cafe™ · Jhansi</p>
                </div>

                <div className="space-y-3">
                  {[
                    { k: "+41%", v: "direct orders after launch" },
                    { k: "₹0", v: "platform commission retained" },
                    { k: "72h", v: "from brief to live deploy" },
                  ].map((s, i) => (
                    <div key={s.v} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-obsidian/60 px-4 py-3">
                      <span className="w-16 font-grotesk text-xl font-bold text-saffron tnum">{s.k}</span>
                      <span className="text-[12px] text-white/50">{s.v}</span>
                      <span className="ml-auto font-grotesk text-[9px] text-white/20">0{i + 1}</span>
                    </div>
                  ))}
                </div>

                <MagneticButton href={DEMO_URL} className="w-full">Launch Live 3D Demo ↗</MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
