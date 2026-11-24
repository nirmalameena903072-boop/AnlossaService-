"use client";
import { motion } from "framer-motion";
import MagneticButton from "./magnetic-button";
import TiltCard from "./tilt-card";
import { Reveal, KineticWords } from "./kinetic-text";
import { waLink } from "@/lib/constants";

type Plan = {
  name: string; price: string; tagline: string; badge?: string; features: string[];
  cta: string; href: string; theme: "gold" | "platinum" | "black"; note: string;
};

const plans: Plan[] = [
  {
    name: "GOLD", price: "1,299", tagline: "The clean digital front door.",
    features: [
      "Fast mobile QR-Menu Website (up to 25 items)",
      "Direct WhatsApp Ordering Cart (0% commission)",
      "Google Maps Directions & 5★ Review Funnel",
      "Print-Ready Table QR Code",
    ],
    cta: "Start With Gold",
    href: waLink("Hi Anlossa Group, I want the GOLD package (₹1,299) — QR menu + WhatsApp ordering. ₹0 advance to start."),
    theme: "gold", note: "ONE-TIME • NO MONTHLY FEE",
  },
  {
    name: "PLATINUM", price: "2,999", tagline: "The flagship scroll experience.", badge: "MOST POPULAR",
    features: [
      "Everything in Gold",
      "Full 3D Scroll-Interactive Website",
      "6 Studio-Grade Dish Visuals",
      "1 High-Converting Promo Reel (9:16 vertical)",
      "Full Menu Digitization (up to 60 items)",
    ],
    cta: "Claim Platinum",
    href: waLink("Hi Anlossa Group, I want the PLATINUM package (₹2,999) — 3D site + studio visuals + reel. ₹0 advance to start."),
    theme: "platinum", note: "ONE-TIME • MOST CHOSEN BY CAFES",
  },
  {
    name: "BLACK VOLIUD", price: "4,999", tagline: "The full operating system.", badge: "FLAGSHIP",
    features: [
      "Everything in Platinum",
      "Custom Brand Architecture",
      "Live Table-to-Counter Ordering Software — table QR → live order screen + instant WhatsApp backup",
      "12 Studio-Grade Dish Visuals + 2 Vertical Promo Reels",
      "Custom Acrylic-Ready Table Tent Designs",
      "30 Days Priority Updates",
    ],
    cta: "Unlock Black Voliud in DM →",
    href: "https://wa.me/919196598226?text=" + encodeURIComponent("Hi Anlossa Group, I want full details for the Black Voliud package with Table Ordering Software."),
    theme: "black", note: "FLAGSHIP • CARBON & GOLD",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-obsidian py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-[320px] w-[800px] -translate-x-1/2 rounded-full bg-saffron/[0.08] blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-saffron/60" />
          <span className="font-grotesk text-[10px] font-bold tracking-[0.32em] text-saffron/80">PRICING ARCHITECTURE • 04</span>
        </Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-[11vw] font-extrabold leading-[0.94] tracking-display sm:text-5xl md:text-6xl">
            <KineticWords text="Three tiers." /><br />
            <span className="text-white/35"><KineticWords text="One decision." delay={0.12} /></span>
          </h2>
          <Reveal delay={0.2} className="max-w-sm text-[13px] leading-relaxed text-white/45">
            One-time pricing. You own the site, the menu and the customer data. No lock-in, no revenue share.
          </Reveal>
        </div>

        {/* ZERO-RISK TRUST BANNER */}
        <Reveal delay={0.1} className="mt-10">
          <div className="relative overflow-hidden rounded-2xl bg-saffron px-5 py-4 text-center md:px-8">
            <div className="absolute inset-0 opacity-[0.16]" aria-hidden
              style={{ backgroundImage: "repeating-linear-gradient(135deg, #050505 0 2px, transparent 2px 10px)" }} />
            <p className="relative font-display text-[13px] font-extrabold uppercase leading-tight tracking-[0.06em] text-obsidian sm:text-[15px] md:text-base">
              ₹0 Advance To Start — Pay Only After You Test Your Live System.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={0.08 * i} className="h-full">
              <TiltCard max={p.theme === "black" ? 6 : 8} className="h-full">
                <div className={`relative flex h-full flex-col p-7 md:p-8 ${
                  p.theme === "black"
                    ? "carbon gold-border text-white"
                    : p.theme === "platinum"
                    ? "border border-saffron/40 bg-[#0B0B0B] text-white shadow-[0_0_70px_-20px_rgba(250,204,21,0.35)]"
                    : "border border-white/[0.12] bg-white/[0.03] text-white"
                }`}>
                  {p.theme === "platinum" && (
                    <motion.span aria-hidden className="pointer-events-none absolute -inset-px rounded-[28px]"
                      animate={{ opacity: [0.25, 0.6, 0.25] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      style={{ background: "radial-gradient(circle at 50% 0%, rgba(250,204,21,0.22), transparent 60%)" }} />
                  )}

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p className={`font-grotesk text-[10px] font-bold tracking-[0.3em] ${p.theme === "black" ? "text-saffron" : "text-white/40"}`}>
                        {p.theme === "gold" ? "TIER 01" : p.theme === "platinum" ? "TIER 02" : "TIER 03"}
                      </p>
                      <h3 className={`mt-2 font-display text-2xl font-extrabold tracking-display ${p.theme === "black" ? "bg-gradient-to-r from-[#FFF3B0] via-saffron to-[#B8860B] bg-clip-text text-transparent" : ""}`}>
                        {p.name}
                      </h3>
                    </div>
                    {p.badge && (
                      <span className={`shrink-0 rounded-full px-2.5 py-1 font-grotesk text-[8.5px] font-bold tracking-[0.16em] ${
                        p.badge === "MOST POPULAR" ? "bg-saffron text-obsidian" : "border border-saffron/40 text-saffron"
                      }`}>
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <p className="relative mt-4 text-[12.5px] leading-relaxed text-white/45">{p.tagline}</p>

                  <div className="relative mt-6 flex items-end gap-2">
                    <span className="font-grotesk text-[15px] font-semibold text-white/50">₹</span>
                    <span className="font-grotesk text-[42px] font-bold leading-none tracking-tight text-white tnum">{p.price}</span>
                    <span className="pb-1 font-grotesk text-[10px] tracking-[0.16em] text-white/35">ONE-TIME</span>
                  </div>
                  <p className="relative mt-2 font-grotesk text-[8.5px] tracking-[0.2em] text-white/25">{p.note}</p>

                  <div className="relative my-6 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

                  <ul className="relative flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-[12.5px] leading-relaxed text-white/65">
                        <span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] font-bold ${
                          p.theme === "black" ? "bg-saffron text-obsidian" : p.theme === "platinum" ? "bg-saffron text-obsidian" : "bg-white/10 text-saffron"
                        }`}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {p.theme === "black" && (
                    <div className="relative mt-6 rounded-2xl border border-saffron/25 bg-saffron/[0.07] p-4">
                      <p className="font-grotesk text-[9px] font-bold tracking-[0.18em] text-saffron">EXCLUSIVITY</p>
                      <p className="mt-2 text-[12.5px] font-semibold leading-snug text-white/80">
                        + Exclusive Growth Add-Ons — Unlock Full Specs in DM
                      </p>
                    </div>
                  )}

                  <div className="relative mt-6">
                    <MagneticButton
                      href={p.href}
                      variant={p.theme === "black" ? "saffron" : p.theme === "platinum" ? "saffron" : "ghost"}
                      className="w-full text-center"
                    >
                      {p.cta}
                    </MagneticButton>
                    {p.theme !== "black" && (
                      <p className="mt-3 text-center font-grotesk text-[8.5px] tracking-[0.18em] text-white/25">
                        ₹0 ADVANCE • PAY AFTER LIVE TEST
                      </p>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-[12.5px] text-white/50">
              Not sure which tier fits your counter? <span className="text-white">Send us your menu size — we'll recommend in 5 minutes.</span>
            </p>
            <a href={waLink("Hi Anlossa Group, my cafe has ___ items and ___ monthly orders. Which package fits me — Gold, Platinum or Black Voliud?")}
              target="_blank" rel="noreferrer"
              className="shrink-0 font-grotesk text-[10px] font-bold tracking-[0.18em] text-saffron underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron">
              ASK ON WHATSAPP →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
