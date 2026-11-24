export const WHATSAPP_NUMBER = "919196598226"; // +91 9196598226
export const WHATSAPP_DISPLAY = "+91 91965 98226";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const DEMO_URL = "https://el-sabroso-cafe-jhansi.vercel.app/";

export const TIERS = ["GOLD", "PLATINUM", "BLACK VOLIUD"] as const;
export type Tier = (typeof TIERS)[number];
