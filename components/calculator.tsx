"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionValueEvent, useTransform } from "framer-motion";
import MagneticButton from "./magnetic-button";
import { Reveal, KineticWords } from "./kinetic-text";
import { waLink } from "@/lib/constants";

const AOV = 250;
const COMMISSION = 0.22;

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function Calculator() {
  const [orders, setOrders] = useState(80);
  const monthly = orders * AOV * COMMISSION;
  const annual = monthly * 12;

  const mv = useMotionValue(annual);
  const spring = useSpring(mv, { stiffness: 120, damping: 24, mass: 0.6 });
  const [display, setDisplay] = useState(annual);
  useMotionValueEvent(spring, "change", (v) => setDisplay(v));
  useEffect(() => { mv.set(annual); }, [annual, mv]);

  const fill = useMemo(() => ((orders - 20) / (400 - 20)) * 100, [orders]);
  const glow = useTransform(spring, (v) => 0.25 + Math.min(v / 300000, 0.5));

  return (
    <section id="calculator" className="relative overflow-hidden bg-mist py-24 text-obsidian md:py-32">
      <div className="grid-lines-light absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-obsidian/30" />
          <span className="font-grotesk text-[10px] font-bold tracking-[0.32em] text-obsidian/50">COMMISSION SAVER • 03</span>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="font-display text-[10.5vw] font-extrabold leading-[0.95] tracking-display sm:text-5xl md:text-[58px]">
              <KineticWords text="See how much commission" /> <span className="text-obsidian/35"><KineticWords text="you stop paying." delay={0.2} /></span>
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-obsidian/55">
              Move the slider to your real order volume. That number on the right is money that currently leaves your counter every year.
            </p>
          </div>

          <div className="md:col-span-5 md:text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-obsidian/15 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulseDot" />
              <span className="font-grotesk text-[10px] font-bold tracking-[0.18em] text-obsidian/60">CALCULATED AT 22% AGGREGATOR CUT</span>
            </div>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-[32px] border border-obsidian/10 bg-white shadow-[0_50px_100px_-60px_rgba(0,0,0,0.4)]">
            <div className="grid md:grid-cols-12">
              {/* control side */}
              <div className="p-7 md:col-span-7 md:p-10">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="orders" className="font-grotesk text-[10px] font-bold tracking-[0.24em] text-obsidian/45">
                    MONTHLY DIRECT ORDERS
                  </label>
                  <span className="font-grotesk text-[10px] tracking-[0.2em] text-obsidian/35 tnum">20 — 400</span>
                </div>

                <div className="mt-5 flex items-end gap-3">
                  <motion.span key={orders} initial={{ opacity: 0.4, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="font-display text-6xl font-extrabold leading-none tracking-display tnum md:text-7xl">
                    {orders}
                  </motion.span>
                  <span className="pb-2 text-[13px] font-semibold text-obsidian/45">orders / month</span>
                </div>

                <input
                  id="orders" type="range" min={20} max={400} step={5} value={orders}
                  onChange={(e) => setOrders(Number(e.target.value))}
                  className="saffron-range mt-7"
                  style={{ ["--fill" as string]: `${fill}%` }}
                  aria-label="Monthly direct orders"
                />

                <div className="mt-3 flex justify-between font-grotesk text-[10px] text-obsidian/35 tnum">
                  <span>20</span><span>110</span><span>200</span><span>300</span><span>400</span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-obsidian/10 bg-mist/60 p-4">
                    <p className="font-grotesk text-[9px] tracking-[0.2em] text-obsidian/40">AVG ORDER VALUE</p>
                    <p className="mt-1 font-grotesk text-xl font-bold tnum">{inr(AOV)}</p>
                  </div>
                  <div className="rounded-2xl border border-obsidian/10 bg-mist/60 p-4">
                    <p className="font-grotesk text-[9px] tracking-[0.2em] text-obsidian/40">MONTHLY REVENUE</p>
                    <p className="mt-1 font-grotesk text-xl font-bold tnum">{inr(orders * AOV)}</p>
                  </div>
                </div>

                <p className="mt-5 text-[11.5px] leading-relaxed text-obsidian/40">
                  Based on your direct-order volume only. Every order routed through your own QR menu keeps the full ticket.
                </p>
              </div>

              {/* readout side */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-obsidian p-7 text-white md:col-span-5 md:p-10">
                <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
                <motion.div aria-hidden style={{ opacity: glow }}
                  className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-saffron/30 blur-[80px]" />
                <div className="relative">
                  <p className="font-grotesk text-[10px] font-bold tracking-[0.26em] text-white/40">ANNUAL FEES SAVED</p>
                  <p className="mt-4 font-display text-[11.5vw] font-extrabold leading-[0.9] tracking-display text-saffron tnum sm:text-5xl md:text-[42px] lg:text-[48px]">
                    {inr(display)}
                  </p>
                  <p className="mt-3 font-grotesk text-[10px] tracking-[0.18em] text-white/35">AT 22% PLATFORM COMMISSION</p>
                </div>

                <div className="relative mt-8 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-white/45">Saved / month</span>
                    <span className="font-grotesk text-sm font-bold text-white tnum">{inr(monthly)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-white/45">Saved / 3 years</span>
                    <span className="font-grotesk text-sm font-bold text-white tnum">{inr(annual * 3)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-white/45">Anlossa Black setup</span>
                    <span className="font-grotesk text-sm font-bold text-saffron tnum">₹4,999 once</span>
                  </div>
                </div>

                <MagneticButton
                  className="relative mt-8 w-full"
                  href={waLink(`Hi Anlossa Group, I run about ${orders} direct orders/month. You showed me I could save ~${inr(annual)}/year in commission. I want the 0% commission system.`)}>
                  Claim My Savings →
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
