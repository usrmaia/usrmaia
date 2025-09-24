import {
  Database,
  Monitor,
  Brain,
  Settings,
  GitBranch,
  Layers,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { DiMsqlServer } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiClickup,
  SiDelphi,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGithub,
  SiJira,
  SiLinux,
  SiMui,
  SiNotion,
  SiOllama,
  SiPortainer,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSqlalchemy,
  SiTailwindcss,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

import { Badge, Card } from "@/components/ui";

export const TechnologiesSection = () => {
  return (
    <section id="tecnologias">
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-balance md:text-4xl">
              Stack Tecnológico
            </h2>
            <p className="text-muted-foreground mt-6">
              Especialista em backend e bancos de dados, com ampla experiência
              em frontend, IA e DevOps para entregar soluções completas e
              robustas.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <TechnologyCard
              icon={<Database className="h-8 w-8" />}
              title="Backend & Databases"
              description="Meu foco principal. Desenvolvimento de APIs robustas e arquitetura de dados escalável."
              technologies={[
                {
                  label: "Express.js",
                  href: "https://expressjs.com/",
                  icon: <SiExpress />,
                },
                {
                  label: "Prisma ORM",
                  href: "https://www.prisma.io/",
                  icon: <SiPrisma />,
                },
                {
                  label: "FastAPI",
                  href: "https://fastapi.tiangolo.com/",
                  icon: <SiFastapi />,
                },
                {
                  label: "Django",
                  href: "https://www.djangoproject.com/",
                  icon: <SiDjango />,
                },
                {
                  label: "SQLAlchemy",
                  href: "https://www.sqlalchemy.org/",
                  icon: <SiSqlalchemy />,
                },
                {
                  label: "ASP.NET",
                  href: "https://dotnet.microsoft.com/apps/aspnet",
                  icon: <SiDotnet />,
                },
                {
                  label: "Entity Framework",
                  href: "https://learn.microsoft.com/pt-br/ef",
                  icon: <SiDotnet />,
                },
                {
                  label: "Horse (Delphi)",
                  href: "https://github.com/HashLoad/horse",
                  icon: <SiDelphi />,
                },
                {
                  label: "SQL Server",
                  href: "https://www.microsoft.com/en-us/sql-server",
                  icon: <DiMsqlServer />,
                },
                {
                  label: "PostgreSQL",
                  href: "https://www.postgresql.org/",
                  icon: <SiPostgresql />,
                },
              ]}
              highlight={true}
            />

            <TechnologyCard
              icon={<Layers className="h-8 w-8" />}
              title="Fullstack"
              description="Desenvolvimento completo de aplicações do backend ao frontend."
              technologies={[
                {
                  label: "Next.js",
                  href: "https://nextjs.org/",
                  icon: <RiNextjsFill />,
                },
                {
                  label: "Django",
                  href: "https://www.djangoproject.com/",
                  icon: <SiDjango />,
                },
                {
                  label: "Delphi",
                  href: "https://www.embarcadero.com/products/delphi",
                  icon: <SiDelphi />,
                },
              ]}
            />

            <TechnologyCard
              icon={<Monitor className="h-8 w-8" />}
              title="Frontend"
              description="Interfaces modernas e responsivas com foco na experiência do usuário."
              technologies={[
                {
                  label: "React",
                  href: "https://reactjs.org/",
                  icon: <SiReact />,
                },
                {
                  label: "Tailwind CSS",
                  href: "https://tailwindcss.com/",
                  icon: <SiTailwindcss />,
                },
                {
                  label: "Shadcn UI",
                  href: "https://ui.shadcn.com/",
                  icon: <SiShadcnui />,
                },
                {
                  label: "Material UI",
                  href: "https://mui.com/",
                  icon: <SiMui />,
                },
              ]}
            />

            <TechnologyCard
              icon={<Brain className="h-8 w-8" />}
              title="Inteligência Artificial"
              description="Especialização em RAG e sistemas inteligentes para automação de processos."
              technologies={[
                {
                  label: "Agno",
                  href: "https://docs.agno.com/",
                  icon: <SiOllama />,
                },
                {
                  label: "LlamaIndex",
                  href: "https://developers.llamaindex.ai/",
                  icon: <SiOllama />,
                },
              ]}
            />

            <TechnologyCard
              icon={<Settings className="h-8 w-8" />}
              title="DevOps & Deploy"
              description="Containerização, orquestração e deploy automatizado de aplicações."
              technologies={[
                {
                  label: "Docker",
                  href: "https://www.docker.com/",
                  icon: <SiDocker />,
                },
                {
                  label: "Portainer",
                  href: "https://www.portainer.io/",
                  icon: <SiPortainer />,
                },
                {
                  label: "Dokploy",
                  href: "https://dokploy.com/",
                  icon: <SiDocker />,
                },
                {
                  label: "Linux",
                  href: "https://www.linux.org/",
                  icon: <SiLinux />,
                },
              ]}
            />

            <TechnologyCard
              icon={<GitBranch className="h-8 w-8" />}
              title="Ferramentas do Dia a Dia"
              description="Ferramentas essenciais para desenvolvimento e colaboração em equipe."
              technologies={[
                {
                  label: "Git/GitHub",
                  href: "https://github.com/",
                  icon: <SiGithub />,
                },
                {
                  label: "VS Code",
                  href: "https://code.visualstudio.com/",
                  icon: <VscCode />,
                },
                {
                  label: "Postman",
                  href: "https://www.postman.com/",
                  icon: <SiPostman />,
                },
                {
                  label: "Figma",
                  href: "https://www.figma.com/",
                  icon: <SiFigma />,
                },
                {
                  label: "Notion",
                  href: "https://www.notion.so/",
                  icon: <SiNotion />,
                },
                {
                  label: "Jira",
                  href: "https://www.atlassian.com/software/jira",
                  icon: <SiJira />,
                },
                {
                  label: "ClickUp",
                  href: "https://clickup.com/",
                  icon: <SiClickup />,
                },
              ]}
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Sempre em constante aprendizado e adaptação às novas tecnologias
              do mercado
            </p>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Desde 2023 desenvolvendo soluções completas e eficientes
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnologyCard = ({
  icon,
  title,
  description,
  technologies,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: { label: string; href: string; icon?: React.ReactNode }[];
  highlight?: boolean;
}) => {
  return (
    <Card
      className={`relative overflow-hidden p-6 ${highlight ? "ring-primary/20 bg-primary/5 ring-2" : ""}`}
    >
      {highlight && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-t-none rounded-l-none">Especialidade</Badge>
        </div>
      )}

      <div className="mb-4 flex items-center gap-3">
        <div
          className={`rounded-lg p-2 ${highlight ? "bg-primary/10 text-primary" : "bg-muted"}`}
        >
          {icon}
        </div>
        <h3 className="text-base font-medium">{title}</h3>
      </div>

      <p className="text-muted-foreground line-clamp-2 text-sm">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map(({ label, href, icon }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-medium"
            >
              {icon}
              {label}
            </Badge>
          </Link>
        ))}
      </div>
    </Card>
  );
};
