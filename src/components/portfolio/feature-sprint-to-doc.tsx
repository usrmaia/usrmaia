import {
  Users,
  FileText,
  Building2,
  Mail,
  Dock,
  PanelBottomClose,
} from "lucide-react";
import Image from "next/image";
import {
  SiAxios,
  SiDotnet,
  SiEslint,
  SiFastapi,
  SiGithub,
  SiMui,
  SiOllama,
  SiPython,
  SiReact,
  SiReactrouter,
  SiSqlite,
} from "react-icons/si";

import { Badge, Button } from "../ui";
import Link from "next/link";
import { FaVectorSquare } from "react-icons/fa";

export default function ContentSprintToDocSection() {
  const technologies = [
    {
      name: "Agno",
      icon: <SiOllama className="size-5" />,
      href: "https://docs.agno.com/",
    },
    {
      name: "Python",
      icon: <SiPython className="size-5" />,
      href: "https://www.python.org/",
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="size-5" />,
      href: "https://fastapi.tiangolo.com/",
    },
    {
      name: "SQLite",
      icon: <SiSqlite className="size-5" />,
      href: "https://www.sqlite.org/",
    },
    {
      name: "QDrant",
      icon: <FaVectorSquare className="size-5" />,
      href: "https://qdrant.tech/",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Sprint to Doc
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="relative aspect-67/34 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/landpage/sprint-to-doc.png"
                className="rounded-[15px] object-cover"
                alt="Interface do sistema LNSF - Lar Nossa Senhora de Fátima"
                width={2000}
                height={2000}
              />
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Uma ferramenta de inteligência artificial que{" "}
                <span className="text-accent-foreground font-semibold">
                  transforma
                </span>{" "}
                suas tasks do Click Up em documentação técnica detalhada e
                organizada que se automantém.
              </p>
              <p className="text-muted-foreground">
                Desenvolvida com Agno, nas horas vagas, para resolver o desafio
                de criar documentação técnica de forma rápida e eficiente.
              </p>
            </div>

            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
              <li>
                <Dock className="size-5" />
                Gestão de Documentos
              </li>
              <li>
                <PanelBottomClose className="size-5" />
                Geração Automática de Documentação
              </li>
            </ul>

            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-medium">Stack Tecnológico</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex items-center gap-2 px-3 py-2"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </Badge>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="https://github.com/usrmaia/sprint-to-doc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <SiGithub />
                    Ver Código no GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
