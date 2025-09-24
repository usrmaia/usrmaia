import ContentLNSFSection from "./content-lnsf";
import ContentONGGabrielSection from "./content-ong-gabriel";
import FeaturesSprintToDoc from "./feature-sprint-to-doc";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-12 md:py-20">
      <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
        <h2 className="text-4xl font-medium text-balance lg:text-5xl">
          Projetos que Fazem a Diferença
        </h2>
        <p>
          Cada linha de código conta uma história. Aqui estão alguns dos
          projetos que mais me orgulho de ter desenvolvido — soluções que
          transformaram ideias em experiências digitais marcantes para empresas
          e comunidades.
        </p>
      </div>

      <ContentLNSFSection />
      <ContentONGGabrielSection />
      <FeaturesSprintToDoc />
    </section>
  );
};
