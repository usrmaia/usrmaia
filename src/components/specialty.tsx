import {
  CheckCircle,
  Code,
  GitBranch,
  Layers,
  Rocket,
  Shield,
} from "lucide-react";

export const DevPrinciples = () => {
  return (
    <section id="principios" className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium text-balance lg:text-5xl">
            Fundamentos sólidos para resultados excepcionais
          </h2>
          <p>
            Desde de 2019 estudando e aplicando as melhores práticas da
            engenharia de software. Domino os conceitos fundamentais que
            transformam código em soluções escaláveis e sustentáveis.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Rocket className="size-4" />
              <h3 className="text-sm font-medium">Desenvolvimento Ágil</h3>
            </div>
            <p className="text-sm">
              Scrum, Kanban e Extreme Programming (XP) para entregas rápidas e
              iterativas. Experiência em sprints, retrospectivas e melhoria
              contínua.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="size-4" />
              <h3 className="text-sm font-medium">Padrões de Projeto</h3>
            </div>
            <p className="text-sm">
              Design Patterns, SOLID, Clean Architecture e Clean Code para
              código reutilizável e fácil de manter. Arquiteturas escaláveis
              desde o início.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4" />
              <h3 className="text-sm font-medium">Testes de Software</h3>
            </div>
            <p className="text-sm">
              TDD, BDD e pirâmide de testes. Unitários, integração e E2E para
              garantir qualidade e confiabilidade em cada entrega.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Code className="size-4" />
              <h3 className="text-sm font-medium">Clean Code</h3>
            </div>
            <p className="text-sm">
              Código legível, simples e expressivo. Refatoração contínua e
              princípios que facilitam manutenção e colaboração em equipe.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              <h3 className="text-sm font-medium">Segurança & Performance</h3>
            </div>
            <p className="text-sm">
              Implementação de boas práticas de segurança, otimização de
              performance e monitoramento para aplicações robustas e confiáveis.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <GitBranch className="size-4" />
              <h3 className="text-sm font-medium">DevOps & CI/CD</h3>
            </div>
            <p className="text-sm">
              Docker, pipelines automatizados e deploy contínuo. Integração e
              entrega eficiente com GitHub Actions, Vercel e ambientes de
              staging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
