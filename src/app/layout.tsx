import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crashy Climber — Climb Higher, Fall Funnier!",
  description:
    "Crashy Climber is a wall-climbing runner: dodge spikes, chain combos, and race up five wild zones from Dirty Stone to molten Lava. Free to play, on beta now.",
  metadataBase: new URL("https://crashyclimber.vercel.app"),
  openGraph: {
    title: "Crashy Climber — Climb Higher, Fall Funnier!",
    description:
      "A wall-climbing runner with five wild zones, spike-dodging combos, and unlockable skins. Free to play, on beta now.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
