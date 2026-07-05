import Hero from "@/components/Hero";
import TrailerVideo from "@/components/TrailerVideo";
import ScreenshotShowcase from "@/components/ScreenshotShowcase";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrailerVideo />
      <ScreenshotShowcase />
      <Features />
      <DownloadCTA />
    </>
  );
}
