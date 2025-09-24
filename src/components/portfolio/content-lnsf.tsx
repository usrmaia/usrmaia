import { Users, FileText, Building2, Mail } from "lucide-react";
import Image from "next/image";
import {
  SiAxios,
  SiDotnet,
  SiEslint,
  SiGithub,
  SiMui,
  SiReact,
  SiReactrouter,
} from "react-icons/si";

import { Badge, Button } from "../ui";
import Link from "next/link";

export default function ContentLNSFSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          LNSF - Lar Nossa Senhora de Fátima
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="relative aspect-67/34 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/landpage/lnsf.png"
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
                Um sistema completo para transformar a{" "}
                <span className="text-accent-foreground font-semibold">
                  eficiência operacional
                </span>{" "}
                do Lar Nossa Senhora de Fátima, automatizando processos manuais
                e otimizando a gestão de pacientes e quartos.
              </p>
              <p className="text-muted-foreground">
                Desenvolvi uma solução robusta que eliminou tarefas manuais
                complexas, como a geração de relatórios, proporcionando mais
                tempo para o que realmente importa:{" "}
                <span className="text-accent-foreground font-semibold">
                  o cuidado com os pacientes e o ambiente
                </span>
                .
              </p>
            </div>

            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
              <li>
                <Users className="size-5" />
                Gestão de Pacientes
              </li>
              <li>
                <Building2 className="size-5" />
                Controle de Quartos
              </li>
              <li>
                <FileText className="size-5" />
                Relatórios Automáticos
              </li>
              <li>
                <Mail className="size-5" />
                Controle de Acessos
              </li>
            </ul>
          </div>
        </div>

        {/* Seção de tecnologias */}
        <div className="border-border space-y-8 border-t pt-12">
          <h3 className="text-2xl font-semibold">Stack Tecnológico</h3>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Backend - .NET */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/10 p-2">
                  <div className="h-6 w-6 rounded bg-purple-500 p-1">
                    <SiDotnet />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">.NET & C#</h4>
                  <p className="text-muted-foreground text-sm">
                    Backend robusto e escalável
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                Utilizei a plataforma .NET com ASP.NET para criar APIs seguras e
                performáticas, aproveitando a tipagem forte do C# para garantir
                confiabilidade do sistema.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <SiDotnet />
                  ASP.NET
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  Entity Framework
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  AutoMapper
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  FluentValidation
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  Serilog
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  JWT
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  xUnit
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  FastReports
                </Badge>
              </div>
            </div>

            {/* Frontend - React */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <div className="h-6 w-6 rounded bg-blue-500 p-1">
                    <SiReact />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">React & TypeScript</h4>
                  <p className="text-muted-foreground text-sm">
                    Interface moderna e intuitiva
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                Desenvolvi uma interface rica e responsiva com React, focando na
                experiência do usuário e na facilidade de uso pelos
                profissionais de saúde.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <SiReact />
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <SiMui />
                  Material-UI
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <SiReactrouter />
                  React Router
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <SiAxios />
                  Axios
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  Unform
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  Yup
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  Material React Table
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <SiEslint />
                  ESLint
                </Badge>
              </div>
            </div>
          </div>

          <Link
            href="https://github.com/LovelaceLines/LNSF/tree/development/"
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
    </section>
  );
}
