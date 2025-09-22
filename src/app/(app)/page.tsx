import {
  CallToAction,
  DescriptionSection,
  FooterSection,
  HeroSection,
  Specialty,
  StatsSection,
  TechnologiesSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialty />
      <TechnologiesSection />
      <DescriptionSection />
      <StatsSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
