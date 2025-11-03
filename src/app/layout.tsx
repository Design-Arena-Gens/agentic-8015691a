import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Astral Atlas | Astrology Companion",
  description:
    "Navigate your cosmic blueprint with personalized horoscopes, compatibility insights, and guided rituals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.12),_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(14,165,233,0.12)_0%,_rgba(59,130,246,0.12)_30%,_rgba(147,51,234,0.16)_70%,_transparent_100%)] opacity-70 mix-blend-screen" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
