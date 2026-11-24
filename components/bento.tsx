"use client";
import { motion } from "framer-motion";
import TiltCard from "./tilt-card";
import BorderBeam from "./border-beam";
import { KineticWords, Reveal } from "./kinetic-text";

const fees = [
  { platform: "Zomato / Swiggy", cut: "22%", width: "88%", tone: "bg-white/10 text-white/45" },
  { platform: "Aggregator promos", cut: "8%", width: "34%", tone: "bg-white/[0.07] text-white/35" },
  { platform: "ANLOSSA direct", cut: "0%", width: "2%", tone: "bg-saffron text-obsidian" },
];

export default function Bento() {
  return (
    <section id="system" className="relative bg-mist py-24 text-obsidian md:py-32">
      <div className="grid-lines-light absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-obsidian/30" />
          <span className="font-grotesk text-[10px] font-bold tracking-[0.32em] text-obsidian/50">THE SYSTEM • 01</span>
        </Reveal>
        <h2 className="max-w-3xl font-display text-[11vw] font-extrabold leading-[0.95] tracking-display sm:text-5xl md:text-6xl">
          <KineticWords text="Three engines." />{" "}
          <span className="text-obsidian/35"><KineticWords text="One quiet machine." delay={0.15} /></span>
        </h2>
        <Reveal delay={0.15} className="mt-5 max-w-xl text-[15px] leading-relaxed text-obsidian/55">
          No bouncing gimmicks. Just the three systems that actually move money back into your cafe — engineered, filmed and deployed.
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {/* CARD 1 — WhatsApp ordering engine */}
          <Reveal className="md:col-span-7" delay={0.05}>
            <TiltCard max={7} className="bg-obsidian text-white">
              <div className="relative flex h-full min-h-[380px] flex-col p-7 md:p-9">
                <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-saffron/15 blur-3xl" aria-hidden />
                <div className="relative flex items-start justify-between">
                  <span className="rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 font-grotesk text-[9px] font-bold tracking-[0.24em] text-saffron">ENGINE 01</span>
                  <span className="font-grotesk text-[10px] tracking-[0.2em] text-white/30">0% COMMISSION</span>
                </div>
                <h3 className="relative mt-6 max-w-md font-display text-3xl font-extrabold leading-[1.02] tracking-display md:text-[40px]">
                  Direct WhatsApp<br /><span className="text-saffron">Ordering Engine.</span>
                </h3>
                <p className="relative mt-3 max-w-sm text-[13.5px] leading-relaxed text-white/50">
                  Customers tap, build a cart, and hit send. The order lands in your WhatsApp — not in an aggregator inbox taking 22%.
                </p>

                <div className="relative mt-auto pt-8">
                  <div className="space-y-2.5">
                    {fees.map((f, i) => (
                      <div key={f.platform} className="flex items-center gap-3">
                        <span className="w-32 shrink-0 font-grotesk text-[10px] tracking-wide text-white/45 sm:w-36">{f.platform}</span>
                        <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: f.width }} viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className={`h-full rounded-full ${f.tone}`} />
                        </div>
                        <span className={`w-10 text-right font-grotesk text-[11px] font-bold tnum ${f.cut === "0%" ? "text-saffron" : "text-white/40"}`}>{f.cut}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* CARD 2 — Live table software */}
          <Reveal className="md:col-span-5" delay={0.12}>
            <TiltCard max={9} className="border border-obsidian/10 bg-white shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)]">
              <div className="relative flex h-full min-h-[380px] flex-col p-7 md:p-8">
                <span className="self-start rounded-full bg-obsidian px-3 py-1 font-grotesk text-[9px] font-bold tracking-[0.24em] text-saffron">ENGINE 02</span>
                <h3 className="mt-6 font-display text-[26px] font-extrabold leading-[1.05] tracking-display md:text-3xl">
                  Live Table-to-<br />Counter Ordering.
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-obsidian/55">
                  Guest scans the table QR → order hits your live order screen + WhatsApp backup. No waiter relay, no lost chits.
                </p>

                <div className="mt-auto space-y-2 pt-6">
                  {[
                    { t: "Table 02", o: "Cold Coffee ×1", s: "Preparing", c: "bg-saffron text-obsidian" },
                    { t: "Table 04", o: "Pizza Bomb ×2", s: "New • 0s", c: "bg-obsidian text-white" },
                    { t: "Table 07", o: "Peri Fries ×1", s: "Served", c: "bg-obsidian/10 text-obsidian/50" },
                  ].map((r, i) => (
                    <motion.div key={r.t} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 rounded-xl border border-obsidian/10 bg-mist/70 px-3 py-2.5">
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-white font-grotesk text-[10px] font-bold shadow-sm">{r.t.slice(-2)}</span>
                      <span className="text-[11.5px] font-semibold">{r.o}</span>
                      <span className={`ml-auto rounded-full px-2.5 py-1 font-grotesk text-[9px] font-bold ${r.c}`}>{r.s}</span>
                    </motion.div>
                  ))}
                  <div className="flex items-center justify-between pt-1 font-grotesk text-[9px] tracking-[0.18em] text-obsidian/35">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulseDot" /> LIVE ORDER SCREEN</span>
                    <span>3 ACTIVE</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* CARD 3 — Studio visuals & reels */}
          <Reveal className="md:col-span-12" delay={0.18}>
            <TiltCard max={5} className="border border-obsidian/[0.08] bg-white shadow-[0_30px_70px_-40px_rgba(0,0,0,0.3)]">
              <div className="relative grid min-h-[300px] gap-8 p-7 md:grid-cols-12 md:items-center md:p-9">
                <div className="md:col-span-6">
                  <span className="inline-block rounded-full border border-obsidian/15 px-3 py-1 font-grotesk text-[9px] font-bold tracking-[0.24em] text-obsidian/60">ENGINE 03</span>
                  <h3 className="mt-5 font-display text-[28px] font-extrabold leading-[1.03] tracking-display md:text-4xl">
                    Studio-lit dishes.<br /><span className="text-obsidian/35">9:16 reels that sell.</span>
                  </h3>
                  <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-obsidian/55">
                    We shoot your menu like a flagship product launch — softbox lighting, macro detail, vertical reels built for Instagram reach.
                  </p>
                  <div className="mt-6 flex gap-6">
                    {[{ k: "6", v: "DISH FRAMES" }, { k: "9:16", v: "REEL RATIO" }, { k: "4K", v: "CAPTURE" }].map((s) => (
                      <div key={s.v}>
                        <p className="font-grotesk text-xl font-bold tnum">{s.k}</p>
                        <p className="font-grotesk text-[8px] tracking-[0.2em] text-obsidian/40">{s.v}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex justify-center gap-3 md:col-span-6 md:justify-end">
                  {["from-amber-200 via-amber-500 to-orange-800", "from-yellow-100 via-lime-600 to-emerald-900", "from-orange-200 via-red-600 to-rose-900"].map((g, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 26, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: [-6, 2, 8][i] }}
                      viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative h-[190px] w-[108px] overflow-hidden rounded-[18px] border-4 border-white bg-gradient-to-b ${g} shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)] sm:h-[230px] sm:w-[130px]`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.55),transparent_58%)]" />
                      <div className="absolute left-1/2 top-[38%] h-16 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/25 blur-md" />
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-2.5 pt-8">
                        <span className="font-grotesk text-[8px] font-bold tracking-widest text-white">REEL 0{i + 1}</span>
                        <span className="grid h-4 w-4 place-items-center rounded-full bg-white/20 text-[7px] text-white">▶</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      {/* border-beam accent strip */}
      <div className="relative mx-auto mt-6 max-w-6xl px-5">
        <BorderBeam className="bg-obsidian">
          <div className="flex flex-col items-center justify-between gap-3 px-7 py-6 text-center sm:flex-row sm:text-left">
            <p className="text-[13px] font-semibold text-white/70">
              Built once. Owned forever. <span className="text-saffron">No monthly platform tax.</span>
            </p>
            <p className="font-grotesk text-[9px] tracking-[0.28em] text-white/35">DEPLOYED IN 72 HOURS • JHANSI, UP</p>
          </div>
        </BorderBeam>
      </div>
    </section>
  );
}
