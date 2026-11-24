import type { Metadata } from "next";
import "@fontsource-variable/syne";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anlossa.group"),
  title: "ANLOSSA GROUP — Hospitality & Cafe Digital Systems | 0% Commission QR Ordering",
  description:
    "Anlossa Group builds 0% commission QR-menu websites, WhatsApp ordering engines and live table-to-counter software for independent cafes & restaurants. ₹0 advance to start. Live demo: el Sabroso Cafe, Jhansi.",
  keywords: ["Anlossa Group", "QR menu", "0% commission", "WhatsApp ordering", "cafe digital systems", "el Sabroso Cafe", "Jhansi"],
  openGraph: {
    title: "ANLOSSA GROUP — 0% Commission Cafe Digital Systems",
    description: "Stop paying 22% to Zomato & Swiggy. Direct WhatsApp ordering, live table software, studio dish visuals.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
