"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import MagneticButton from "./magnetic-button";
import { waLink, DEMO_URL } from "@/lib/constants";

function Callout({ label, value, className, z, progress, range }: {
  label: string; value: string; className: string; z: number; progress: MotionValue<number>; range: [number, number];
}) {
  const y = useTransform(progress, range, [40, -28]);
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.88, 1]);
  return (
    <motion.div style={{ y, opacity, scale, z }}
      className={`gpu absolute z-30 hidden items-center gap-2.5 rounded-2xl border border-white/[0.12] bg-white/[0.06] px-3.5 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl md:flex ${className}`}>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron animate-pulseDot" />
      <span>
        <span className="block font-grotesk text-[8.5px] font-bold tracking-[0.2em] text-white/50">{label}</span>
        <span className="block whitespace-nowrap font-grotesk text-[12px] font-bold tracking-wide text-saffron tnum">{value}</span>
      </span>
    </motion.div>
  );
}

function PhoneScreen() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[38px] bg-[#0B0B0B] text-white">
      <div className="flex items-center justify-between px-6 pt-4 font-grotesk text-[10px] text-white/60 tnum">
        <span>9:41</span>
        <span className="flex items-center gap-1"><span>5G</span>
          <span className="relative inline-block h-2.5 w-5 rounded-sm border border-white/40"><span className="absolute inset-[2px] right-[6px] rounded-[1px] bg-saffron" /></span>
        </span>
      </div>
      <div className="mx-auto mt-2 h-5 w-24 rounded-full border border-white/10 bg-black" />

      <div className="px-5 pt-4">
        <p className="font-grotesk text-[9px] font-bold tracking-[0.3em] text-saffron">ANLOSSA SYSTEM • LIVE</p>
        <h3 className="font-display text-[22px] font-extrabold leading-tight tracking-display">el Sabroso Cafe™</h3>
        <p className="text-[11px] text-white/50">Jhansi, UP • <span className="text-emerald-400">Open Now</span> • Table QR Menu</p>
      </div>

      <div className="mx-5 mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-1.5">
          <div className="qr-pattern h-full w-full opacity-90" />
          <span className="absolute left-1.5 top-1.5 h-2 w-2 border-2 border-black" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 border-2 border-black" />
          <span className="absolute bottom-1.5 left-1.5 h-2 w-2 border-2 border-black" />
          <div className="absolute inset-0 grid place-items-center"><span className="rounded-sm bg-saffron px-1 font-grotesk text-[8px] font-bold text-black">QR</span></div>
        </div>
        <div>
          <p className="text-[11px] font-bold">Scan. Order. Eat.</p>
          <p className="text-[10px] leading-snug text-white/45">No app. No commission.<br />Direct to our kitchen.</p>
        </div>
        <span className="ml-auto shrink-0 rounded-full border border-saffron/40 px-2 py-1 font-grotesk text-[9px] font-bold tracking-widest text-saffron">0%</span>
      </div>

      <div className="mt-4 flex-1 space-y-2 px-5">
        {[
          { name: "Pizza Bomb", price: "₹50", tag: "BESTSELLER" },
          { name: "Cold Coffee", price: "₹99", tag: "" },
          { name: "Peri Peri Fries", price: "₹79", tag: "NEW" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron/30 to-saffron/5 text-base">🍕</div>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-bold">
                {item.name}{" "}
                {item.tag && <span className="ml-1 rounded bg-saffron px-1 py-px font-grotesk text-[7px] font-bold text-black">{item.tag}</span>}
              </p>
              <p className="font-grotesk text-[11px] font-bold text-saffron tnum">{item.price}</p>
            </div>
            <span className="ml-auto shrink-0 rounded-full bg-saffron px-3 py-1.5 font-grotesk text-[10px] font-bold text-black">+ ADD</span>
          </div>
        ))}
      </div>

      <div className="p-5 pt-2">
        <div className="flex items-center justify-between rounded-2xl bg-saffron px-4 py-3 text-black shadow-[0_10px_30px_rgba(250,204,21,0.35)]">
          <span className="text-[12px] font-extrabold tracking-wide">Order on WhatsApp</span><span className="text-sm">↗</span>
        </div>
        <p className="mt-2 text-center font-grotesk text-[9px] tracking-widest text-white/35">POWERED BY ANLOSSA GROUP</p>
      </div>
    </div>
  );
}

export default function PhoneStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  const rotateX = useTransform(smooth, [0, 0.45, 1], [-16, 4, 10]);
  const rotateY = useTransform(smooth, [0, 0.45, 1], [-26, 10, 24]);
  const phoneY = useTransform(smooth, [0, 1], [26, -34]);
  const phoneScale = useTransform(smooth, [0, 1], [0.94, 1]);
  const glowOpacity = useTransform(smooth, [0, 1], [0.35, 0.9]);
  const headY = useTransform(smooth, [0, 0.55], [0, -80]);
  const headOpacity = useTransform(smooth, [0, 0.4], [1, 0]);
  const subOpacity = useTransform(smooth, [0.35, 0.7], [0, 1]);
  const subY = useTransform(smooth, [0.35, 0.7], [24, 0]);
  const ringRotate = useTransform(smooth, [0, 1], [0, 140]);

  return (
    <section ref={ref} id="hero" className="relative h-[200vh] bg-obsidian">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
        <motion.div style={{ opacity: glowOpacity }} aria-hidden
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron/[0.13] blur-[130px] md:left-[72%]" />

        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-[72px] sm:pt-[88px] md:grid md:grid-cols-2 md:items-center md:gap-8 md:pt-24 lg:pt-16">
          {/* Copy */}
          <div className="relative text-center md:text-left">
            <motion.div style={{ y: headY, opacity: headOpacity }}>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3.5 py-1.5 font-grotesk text-[8.5px] font-bold tracking-[0.24em] text-saffron sm:mb-4 sm:text-[9.5px] sm:tracking-[0.28em]">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulseDot" /> ANLOSSA GROUP — HOSPITALITY &amp; CAFE DIGITAL SYSTEMS
              </p>
              <h1 className="font-display text-[10.5vw] font-extrabold leading-[0.92] tracking-display sm:text-[46px] md:text-[40px] lg:text-[48px] xl:text-[62px]">
                Your cafe.<br /><span className="text-saffron">Zero commission.</span><br />Full control.
              </h1>
              <p className="mx-auto mt-4 hidden max-w-md text-sm leading-relaxed text-white/55 md:mx-0 md:mt-5 md:block lg:text-[14.5px]">
                We build QR-menu websites, direct WhatsApp ordering and live table software for independent cafes — so every order comes to you, not Zomato.
              </p>
            </motion.div>
            <div className="mt-7 hidden items-center gap-3 md:flex">
              <MagneticButton href={waLink("Hi Anlossa Group, I want my cafe's 0% commission QR system. ₹0 advance to start — please share details.")}>
                Start ₹0 Advance →
              </MagneticButton>
              <MagneticButton href={DEMO_URL} variant="ghost">Live Demo ↗</MagneticButton>
            </div>
            <motion.p style={{ opacity: headOpacity }} className="mt-6 hidden font-grotesk text-[9px] tracking-[0.26em] text-white/30 md:block">
              SCROLL TO ROTATE • LIVE PROTOTYPE: EL SABROSO CAFE™, JHANSI
            </motion.p>
          </div>

          {/* 3D stage */}
          <div className="perspective-1200 relative mt-3 flex flex-1 items-center justify-center md:mt-0">
            <motion.div style={{ rotateX, rotateY, y: phoneY, scale: phoneScale, transformStyle: "preserve-3d" }} className="gpu relative">
              <motion.div style={{ rotate: ringRotate }} aria-hidden
                className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-saffron/25" />

              {/* fixed-size device, scaled per breakpoint */}
              <div className="relative h-[336px] w-[175px] sm:h-[403px] sm:w-[210px] md:h-[476px] md:w-[248px] lg:h-[500px] lg:w-[261px]">
                <div className="absolute left-1/2 top-1/2 h-[560px] w-[292px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.6] sm:scale-[0.72] md:scale-[0.85] lg:scale-[0.89]">
                  <div className="relative h-full w-full rounded-[46px] border border-white/15 bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] p-[10px] shadow-[0_50px_120px_rgba(0,0,0,0.85),0_0_80px_rgba(250,204,21,0.12)]">
                    <div className="absolute -right-[3px] top-28 h-16 w-[3px] rounded bg-[#333]" />
                    <div className="absolute -left-[3px] top-24 h-10 w-[3px] rounded bg-[#333]" />
                    <PhoneScreen />
                  </div>
                </div>
              </div>

              {/* telemetry callouts — translateZ depth */}
              <Callout label="PLATFORM FEE" value="0% COMMISSION" z={90} progress={smooth} range={[0.1, 0.42]} className="-left-16 top-8" />
              <Callout label="MENU LOAD" value="<0.8s LOAD" z={70} progress={smooth} range={[0.25, 0.6]} className="-right-16 top-36" />
              <Callout label="TABLE SOFTWARE" value="LIVE TABLE SOFTWARE" z={110} progress={smooth} range={[0.45, 0.85]} className="-left-20 bottom-12" />

              {/* live order toast */}
              <motion.div style={{ opacity: subOpacity, z: 60 }}
                className="absolute -right-10 bottom-24 z-30 hidden rounded-2xl border border-white/[0.12] bg-[#0d0d0d]/90 px-4 py-3 backdrop-blur-xl sm:block">
                <p className="font-grotesk text-[9px] tracking-[0.2em] text-white/45">NEW ORDER • TABLE 4</p>
                <p className="font-grotesk text-sm font-bold text-saffron tnum">Pizza Bomb ×2 — ₹100</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile CTAs */}
        <motion.div style={{ opacity: subOpacity, y: subY }}
          className="relative z-20 mx-auto flex w-full max-w-3xl flex-col items-center gap-2 px-5 pb-4 text-center sm:gap-3 sm:pb-6 md:hidden">
          <div className="flex w-full max-w-[300px] flex-col items-stretch gap-2 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <MagneticButton href={waLink("Hi Anlossa Group, I want my cafe's 0% commission QR system. ₹0 advance to start — please share details.")} className="w-full sm:w-auto">
              Start ₹0 Advance →
            </MagneticButton>
            <MagneticButton href={DEMO_URL} variant="ghost" className="w-full sm:w-auto">Launch Live 3D Demo ↗</MagneticButton>
          </div>
          <p className="hidden font-grotesk text-[10px] tracking-[0.25em] text-white/35 sm:block">SCROLL TO ROTATE • LIVE PROTOTYPE: EL SABROSO CAFE™, JHANSI</p>
        </motion.div>

        {/* scroll indicator */}
        <motion.div style={{ opacity: headOpacity }} aria-hidden className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="h-10 w-px bg-gradient-to-b from-transparent via-white/30 to-saffron" />
        </motion.div>
      </div>
    </section>
  );
}
