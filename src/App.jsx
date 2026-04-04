import { FloatingCVButton } from "./components/FloatingCVButton";
import { BackgroundDecoration } from "./components/BackgroundDecoration";
import { Header } from "./components/Header";
import { SectionDivider } from "./components/SectionDivider";
import { HeroSection } from "./components/sections/HeroSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { WorkSection } from "./components/sections/WorkSection";
import { MetricsSection } from "./components/sections/MetricsSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function SebastianCoutoPortfolioV2() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#07111f] text-slate-100">
      <BackgroundDecoration />
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <WorkSection />
        <SectionDivider />
        <MetricsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <FloatingCVButton />
    </div>
  );
}
