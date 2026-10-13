import { GridBackgroundDemo } from "@/components/layout/background/background";
import { Hero } from "@/components/hero/hero";
import { FeaturesSection } from "@/components/features/featuresSection";
import { Faq } from "@/components/faq/faq";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-mono">
      <div className="absolute inset-0 -z-10">
        <GridBackgroundDemo />
      </div>

      <Hero />
      <FeaturesSection />
      <Faq />
    </main>
  );
}