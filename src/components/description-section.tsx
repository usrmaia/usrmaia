import { BookOpen, Heart, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

export const DescriptionSection = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium text-balance lg:text-5xl">
            Minha jornada é construída em colaboração, aprendizado e propósito.
          </h2>
          <p>
            Minha jornada na tecnologia começou em 2019 na Ciência da Computação
            pela UFC, onde descobri que aprender e ensinar podem andar lado a
            lado. Essa vivência me mostrou que compartilhar conhecimento é uma
            das formas mais poderosas de crescer junto com outras pessoas.
          </p>
        </div>

        <InfiniteSlider
          gap={24}
          speed={30}
          speedOnHover={10}
          className="h-140 py-4 md:h-128"
        >
          <div className="flex-shrink-0">
            <Image
              className="h-full max-h-[520px] w-auto rounded-(--radius) object-cover grayscale transition-all duration-500 hover:grayscale-0"
              src="/landpage/profile-1.jpg"
              alt="Palestrando na Semana da Engenharia de Software e Ciência da Computação (SESCOMP) da UFC"
              height={400}
              width={400}
              loading="lazy"
            />
          </div>
          <div className="flex h-140 flex-col gap-8 md:h-128">
            <Image
              className="h-[calc(50%-36px)] w-auto rounded-(--radius) object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-[calc(50%-24px)]"
              src="/landpage/profile-2.jpg"
              alt="Registro com a turma de Código Limpo na UFC"
              height={400}
              width={400}
              loading="lazy"
            />
            <Image
              className="h-[calc(50%-36px)] w-auto rounded-(--radius) object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-[calc(50%-24px)]"
              src="/landpage/profile-3.jpg"
              alt="Registro com o LearningLap, equipe responsável por realizar o curso"
              height={400}
              width={400}
              loading="lazy"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              className="h-full max-h-[520px] w-auto rounded-(--radius) object-cover grayscale transition-all duration-500 hover:grayscale-0"
              src="/landpage/profile-4.jpg"
              alt="Registro do workshop de Angular para os desenvolvedores do Programa de Extensão Tutórial (PET) da UFC"
              height={400}
              width={400}
              loading="lazy"
            />
          </div>
          <div className="flex h-140 flex-col gap-8 md:h-128">
            <Image
              className="h-[calc(50%-36px)] w-auto rounded-(--radius) object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-[calc(50%-24px)]"
              src="/landpage/profile-5.jpg"
              alt="Workshop resumo do curso de Código Limpo para o alunos da escola técnica de computação"
              height={400}
              width={400}
              loading="lazy"
            />
            <Image
              className="h-[calc(50%-36px)] w-auto rounded-(--radius) object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-[calc(50%-24px)]"
              src="/landpage/profile-6.jpg"
              alt="Workshop resumo do curso de Código Limpo para o alunos da escola técnica de computação"
              height={400}
              width={400}
              loading="lazy"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              className="h-full max-h-[520px] w-auto rounded-(--radius) object-cover grayscale transition-all duration-500 hover:grayscale-0"
              src="/landpage/profile-7.webp"
              alt="Registro com o sistema de atendimento da ONG Gabriel desenvolvido pelo time PopCorners"
              height={400}
              width={400}
              loading="lazy"
            />
          </div>
        </InfiniteSlider>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="size-4" />
              <h3 className="text-sm font-medium">Educador</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Monitor universitário, palestrante e mentor de devs iniciantes.
              Compartilhar conhecimento é crescer junto.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <h3 className="text-sm font-medium">Líder</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Experiência como Tech Lead, facilitando comunicação e mantendo
              times/setores alinhados em objetivos comuns.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4" />
              <h3 className="text-sm font-medium">Curioso</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Programar é aprender coisas novas. Essa curiosidade me move a
              buscar soluções melhores e testar tecnologias.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Heart className="size-4" />
              <h3 className="text-sm font-medium">Propósito</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Projetos com impacto social me atraem. Tecnologia com colaboração
              e propósito fazem a diferença real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
