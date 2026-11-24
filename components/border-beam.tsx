"use client";
/** VengeanceUI border-beam highlight — adapted as a rotating conic beam wrapper. */
export default function BorderBeam({
  children, className = "", beamClass = "",
}: { children: React.ReactNode; className?: string; beamClass?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] ${className}`}>
      <div aria-hidden className={`pointer-events-none absolute -inset-[70%] animate-beam-spin ${beamClass}`}
        style={{ background: "conic-gradient(from 0deg, transparent 0deg, transparent 295deg, rgba(250,204,21,0.9) 330deg, transparent 360deg)" }} />
      <div className="relative z-[1] h-full rounded-[27px]">{children}</div>
    </div>
  );
}
