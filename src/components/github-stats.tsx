"use client";

import { Calendar, Loader2, TrendingUp } from "lucide-react";

import { useGitHubStats } from "@/hooks/useGitHubStats";
import { Card } from "./ui";

export const GitHubStatsSection = () => {
  const { data, loading, error } = useGitHubStats();

  if (error) return;

  if (loading && !data)
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="text-primary h-8 w-8 animate-spin" />
          <p className="text-muted-foreground">Carregando dados do GitHub...</p>
        </div>
      </div>
    );

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Minha Jornada no GitHub
          </h2>
          <p>
            Uma visão dos meus {loading ? "..." : data?.yearsOfCoding || "..."}{" "}
            anos construindo soluções através do código. Cada repositório conta
            uma história de aprendizado, crescimento e colaboração na comunidade
            tech.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">{data?.user.public_repos}</div>
            <p>Repositórios Públicos</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">{data?.totalStars}</div>
            <p>Stars Recebidas</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">{data?.recentActivity}</div>
            <div className="space-y-2">
              <p>Projetos Ativos</p>
              <p className="text-muted-foreground text-xs">últimos 6 meses</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="text-primary h-5 w-5" />
                <h4 className="font-semibold">Experiência</h4>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">
                  {data?.yearsOfCoding || 0}+ anos
                </p>
                <p className="text-muted-foreground text-sm">
                  codando e criando soluções
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <h4 className="font-semibold">Atividade Recente</h4>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">
                  {data?.recentActivity || 0} projetos
                </p>
                <p className="text-muted-foreground text-sm">
                  atualizados nos últimos 6 meses
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
