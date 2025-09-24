import {
  CallToAction,
  DescriptionSection,
  FooterSection,
  HeroSection,
  DevPrinciples,
  PortfolioSection,
  GitHubStatsSection,
  TechnologiesSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DevPrinciples />
      <TechnologiesSection />
      <DescriptionSection />
      <PortfolioSection />
      <GitHubStatsSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
