import {
  CallToAction,
  DescriptionSection,
  FooterSection,
  HeroSection,
  Specialty,
  GitHubStatsSection,
  TechnologiesSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialty />
      <TechnologiesSection />
      <DescriptionSection />
      <GitHubStatsSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
