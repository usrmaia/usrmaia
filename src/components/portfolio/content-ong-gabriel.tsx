import { Heart, Users, Shield, ExternalLink, Zap, Cpu } from "lucide-react";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiPrisma,
  SiZod,
  SiVitest,
  SiTypescript,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { Button } from "@/components/ui";
import { Badge } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

export default function ContentONGGabrielSection() {
  const technologies = [
    {
      name: "Next.js",
      icon: <RiNextjsFill className="size-5" />,
      href: "https://nextjs.org/",
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="size-5" />,
      href: "https://www.prisma.io/",
    },
    {
      name: "Zod",
      icon: <SiZod className="size-5" />,
      href: "https://zod.dev/",
    },
    {
      name: "Vitest",
      icon: <SiVitest className="size-5" />,
      href: "https://vitest.dev/",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="size-5" />,
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "Docker",
      icon: <SiDocker className="size-5" />,
      href: "https://www.docker.com/",
    },
  ];

  const features = [
    {
      icon: <Heart className="size-5 text-red-500" />,
      title: "Cuidado Humanizado",
      description:
        "Plataforma focada no bem-estar emocional e mental dos usuários.",
    },
    {
      icon: <Users className="size-5 text-blue-500" />,
      title: "Conexão Profissional",
      description:
        "Facilita o encontro entre profissionais qualificados e pacientes.",
    },
    {
      icon: <Shield className="size-5 text-green-500" />,
      title: "Ambiente Seguro",
      description: "Dados protegidos e ambiente confiável para atendimentos.",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          ONG Gabriel - Atendimento Psicológico
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Uma solução completa para{" "}
              <span className="text-accent-foreground font-bold">
                atendimento psicológico
              </span>{" "}
              acessível e humanizado.
            </p>
            <p className="text-muted-foreground">
              Com tecnologias modernas e foco na experiência do usuário, a
              plataforma oferece um ambiente seguro e intuitivo para
              profissionais e pacientes se conectarem.
            </p>
            <p className="text-muted-foreground">
              Desenvolvido pelo Squad PopCorners, afiliado ao Pipoca Ágil e
              apoiado pela ONG Gabriel, este projeto conecta desenvolvedores,
              designers, qas e gestores para resolver o desafio de oferecer
              atendimento psicológico gratuito e de qualidade.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="size-4" />
                  <h3 className="text-sm font-medium">Conexão Profissional</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Facilita o encontro entre profissionais qualificados e
                  pacientes.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Ambiente Seguro</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Dados protegidos e ambiente confiável para atendimentos.
                </p>
              </div>
            </div>

            <div className="space-y-4">
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
                  href="https://github.com/usrmaia/ong-gabriel/"
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

          <div className="relative mt-6 sm:mt-0">
            <div className="relative aspect-67/34 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/landpage/ong-gabriel.png"
                className="rounded-[15px]"
                alt="payments illustration dark"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
