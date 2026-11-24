"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, KineticWords } from "./kinetic-text";
import { WHATSAPP_DISPLAY, waLink, DEMO_URL, TIERS, type Tier } from "@/lib/constants";

export default function LeadFooter() {
  const [cafe, setCafe] = useState("");
  const [city, setCity] = useState("");
  const [tier, setTier] = useState<Tier>("PLATINUM");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const message = `Hi Anlossa Group, I'm ${cafe || "[Cafe Name]"} from ${city || "[City]"}. I'm interested in the ${tier} package. Please share the ₹0 advance launch plan.`;
  const ready = cafe.trim().length > 0 && city.trim().length > 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) { setError("Add your cafe name and city so we can reply properly."); return; }
    setError("");
    setSent(true);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="start" className="relative overflow-hidden bg-obsidian pt-24 md:pt-32">
      <div className="absolute inset-x-0 bottom-0 h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(250,204,21,0.10),transparent_65%)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 md:items-center">
          {/* copy */}
          <div className="md:col-span-6">
            <Reveal className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-saffron/60" />
              <span className="font-grotesk text-[10px] font-bold tracking-[0.32em] text-saffron/80">INSTANT LAUNCH • 05</span>
            </Reveal>
            <h2 className="font-display text-[11vw] font-extrabold leading-[0.94] tracking-display sm:text-5xl md:text-[56px]">
              <KineticWords text="Your system goes live" /> <span className="text-saffron"><KineticWords text="before you pay." delay={0.18} /></span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/50">
              Three fields. One tap. Your brief lands directly in our WhatsApp with everything we need to quote and start building.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "₹0 advance — test the live system first",
                "72-hour deployment for Gold & Platinum",
                "You keep 100% of every order",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-saffron text-[10px] font-bold text-obsidian">✓</span>
                  <span className="text-[13px] text-white/65">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* form */}
          <Reveal delay={0.12} className="md:col-span-6">
            <form onSubmit={submit} className="relative rounded-[28px] border border-white/[0.12] bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
              <div className="absolute -inset-px -z-10 rounded-[28px] bg-gradient-to-b from-saffron/20 to-transparent opacity-40 blur-sm" aria-hidden />
              <div className="flex items-center justify-between">
                <p className="font-grotesk text-[9px] font-bold tracking-[0.26em] text-saffron">QUICK-LAUNCH FORM</p>
                <span className="font-grotesk text-[9px] tracking-[0.18em] text-white/25">03 FIELDS</span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="cafe" className="mb-1.5 block font-grotesk text-[9px] font-bold tracking-[0.2em] text-white/40">CAFE NAME</label>
                  <input id="cafe" value={cafe} onChange={(e) => { setCafe(e.target.value); setSent(false); }} placeholder="el Sabroso Cafe"
                    className="w-full rounded-xl border border-white/[0.12] bg-obsidian/70 px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-saffron/70 focus:ring-2 focus:ring-saffron/15" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="mb-1.5 block font-grotesk text-[9px] font-bold tracking-[0.2em] text-white/40">CITY</label>
                    <input id="city" value={city} onChange={(e) => { setCity(e.target.value); setSent(false); }} placeholder="Jhansi"
                      className="w-full rounded-xl border border-white/[0.12] bg-obsidian/70 px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-saffron/70 focus:ring-2 focus:ring-saffron/15" />
                  </div>
                  <div>
                    <label htmlFor="tier" className="mb-1.5 block font-grotesk text-[9px] font-bold tracking-[0.2em] text-white/40">SELECTED TIER</label>
                    <select id="tier" value={tier} onChange={(e) => { setTier(e.target.value as Tier); setSent(false); }}
                      className="w-full appearance-none rounded-xl border border-white/[0.12] bg-obsidian/70 px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-saffron/70 focus:ring-2 focus:ring-saffron/15">
                      {TIERS.map((t) => <option key={t} value={t} className="bg-obsidian">{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/[0.07] bg-obsidian/60 p-3.5">
                <p className="font-grotesk text-[8px] tracking-[0.22em] text-white/25">WHATSAPP PREVIEW</p>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/55">{message}</p>
              </div>

              {error && <p className="mt-3 text-[11px] font-semibold text-red-400">{error}</p>}

              <motion.button type="submit" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-6 py-4 text-[12px] font-extrabold uppercase tracking-[0.12em] text-obsidian shadow-[0_0_36px_rgba(250,204,21,0.35)] transition-shadow hover:shadow-[0_0_50px_rgba(250,204,21,0.5)]">
                {sent ? "Open WhatsApp Again ↗" : "Send Brief on WhatsApp ↗"}
              </motion.button>
              <p className="mt-3 text-center font-grotesk text-[8.5px] tracking-[0.18em] text-white/25">
                OPENS WA.ME • {WHATSAPP_DISPLAY} • NO SPAM, EVER
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative mt-24 border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron font-display text-base font-extrabold text-obsidian">A</span>
                <span className="font-display text-sm font-extrabold tracking-[0.16em]">ANLOSSA GROUP</span>
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-white/40">
                Hospitality &amp; Cafe Digital Systems.<br />Built for independent cafes &amp; restaurants.
              </p>
              <div className="mt-5 flex gap-2">
                {["IG", "WA", "IN"].map((s) => (
                  <a key={s} href={s === "WA" ? waLink("Hi Anlossa Group, I found you online.") : s === "IG" ? "https://instagram.com" : "https://linkedin.com"}
                    target="_blank" rel="noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.12] font-grotesk text-[9px] font-bold text-white/50 transition-colors hover:border-saffron/50 hover:text-saffron">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:gap-16">
              <div>
                <p className="font-grotesk text-[9px] font-bold tracking-[0.24em] text-white/30">SYSTEM</p>
                <ul className="mt-4 space-y-2.5 text-[12px] text-white/50">
                  <li><a href="#system" className="hover:text-saffron">The 3 Engines</a></li>
                  <li><a href="#calculator" className="hover:text-saffron">Commission Saver</a></li>
                  <li><a href="#pricing" className="hover:text-saffron">Pricing</a></li>
                  <li><a href={DEMO_URL} target="_blank" rel="noreferrer" className="hover:text-saffron">Live Demo ↗</a></li>
                </ul>
              </div>
              <div>
                <p className="font-grotesk text-[9px] font-bold tracking-[0.24em] text-white/30">START</p>
                <ul className="mt-4 space-y-2.5 text-[12px] text-white/50">
                  <li><a href={waLink("Hi Anlossa Group, I want to start my cafe's digital system.")} target="_blank" rel="noreferrer" className="hover:text-saffron">{WHATSAPP_DISPLAY}</a></li>
                  <li><a href="#start" className="hover:text-saffron">Quick-Launch Form</a></li>
                  <li><a href="#pricing" className="hover:text-saffron">₹0 Advance</a></li>
                  <li><span className="text-white/30">Jhansi, UP · India</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden border-t border-white/[0.07] pt-7">
            <p className="font-display text-[7.5vw] font-extrabold leading-none tracking-display text-white/[0.05] sm:text-[64px] md:text-[86px]">
              ANLOSSA GROUP
            </p>
            <div className="mt-6 flex flex-col gap-2 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <p>ANLOSSA GROUP • Built for Independent Cafes &amp; Restaurants</p>
              <p className="font-grotesk tracking-[0.18em]">© {new Date().getFullYear()} • ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
