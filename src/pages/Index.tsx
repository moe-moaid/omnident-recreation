import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { InteractiveShowcase } from "@/components/sections/interactive-showcase";
import { lazy } from "react";
const HeroSection = lazy(() => import("@/components/sections/hero"));
const FeaturesSection = lazy(() => import("@/components/sections/features"));

const Index = () => {
  return (
    <div className="min-h-screen bg-surface font-body">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InteractiveShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
