const items = ["0% COMMISSION", "DIRECT WHATSAPP ORDERS", "LIVE TABLE SOFTWARE", "₹0 ADVANCE TO START", "STUDIO DISH VISUALS", "72H DEPLOYMENT"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-obsidian/10 bg-saffron py-3.5">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-grotesk text-[11px] font-bold tracking-[0.22em] text-obsidian">
            {t}<span className="text-obsidian/50">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
