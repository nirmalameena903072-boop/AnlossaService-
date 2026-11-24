import Nav from "@/components/nav";
import PhoneStage from "@/components/phone-stage";
import Marquee from "@/components/marquee";
import Bento from "@/components/bento";
import Showcase from "@/components/showcase";
import Calculator from "@/components/calculator";
import Pricing from "@/components/pricing";
import LeadFooter from "@/components/lead-footer";
import { waLink } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative bg-obsidian">
      <Nav />
      <PhoneStage />
      <Marquee />
      <Bento />
      <Showcase />
      <Calculator />
      <Pricing />
      <LeadFooter />

      {/* floating WhatsApp dock */}
      <a
        href={waLink("Hi Anlossa Group, I want to stop paying commission on my cafe orders.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Anlossa Group on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full border border-saffron/40 bg-obsidian/90 py-2.5 pl-3 pr-4 text-[11px] font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform hover:scale-105"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-saffron text-obsidian">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
          </svg>
        </span>
        Chat Now
      </a>
    </main>
  );
}
