"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/constants";

const links = [
  { label: "System", href: "#system" },
  { label: "Live Demo", href: "#showcase" },
  { label: "ROI", href: "#calculator" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-2xl transition-all duration-500 sm:px-5 ${
            scrolled ? "border-white/10 bg-obsidian/80 shadow-[0_18px_50px_rgba(0,0,0,0.6)]" : "border-white/[0.07] bg-white/[0.03]"
          }`}
        >
          <a href="#hero" className="flex items-center gap-2.5 pl-1">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-saffron font-display text-[15px] font-extrabold text-obsidian">A</span>
            <span className="leading-none">
              <span className="block font-display text-[13px] font-extrabold tracking-[0.16em]">ANLOSSA</span>
              <span className="mt-1 block font-grotesk text-[8px] tracking-[0.3em] text-white/40">GROUP • IN</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide text-white/60 transition-colors hover:bg-white/5 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={waLink("Hi Anlossa Group, I'd like to discuss a digital system for my cafe.")} target="_blank" rel="noreferrer"
              className="hidden rounded-full bg-saffron px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-obsidian transition-transform hover:scale-[1.03] sm:block">
              Talk on WhatsApp
            </a>
            <button aria-label="Menu" onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 md:hidden">
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 h-[1.5px] w-4 bg-white transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] w-4 bg-white transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/10 bg-obsidian/95 p-4 backdrop-blur-xl md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/75 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href={waLink("Hi Anlossa Group, I'd like to discuss a digital system for my cafe.")} target="_blank" rel="noreferrer"
              className="mt-2 block rounded-xl bg-saffron px-4 py-3 text-center text-[12px] font-extrabold uppercase tracking-wider text-obsidian">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
