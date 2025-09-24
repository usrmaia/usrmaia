import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HeroHeader } from "./header";
import {
  Badge,
  Button,
  InfiniteSlider,
  ProgressiveBlur,
} from "@/components/ui";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export const HeroSection = () => {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 top-56 -z-20 mask-b-from-35% mask-b-to-90% lg:top-32"
            >
              <Image
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="background"
                className="hidden size-full dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.175,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-6"
                >
                  <Badge variant="outline">Desenvolvedor Full-Stack</Badge>
                </AnimatedGroup>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-4 max-w-4xl text-5xl text-balance max-md:font-semibold md:text-7xl lg:mt-6 xl:text-[5.25rem]"
                >
                  Oi, George Maia aqui!
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-lg text-balance"
                >
                  Transformo ideias em soluções digitais completas. Ajudo
                  startups e empresas a crescerem mais rápido com
                  desenvolvimento web moderno e eficiente.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#contato">
                        <span className="text-nowrap">Vamos conversar</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="#projetos">
                      <span className="text-nowrap">Ver meus projetos</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background mt-12 pb-16 md:pb-32">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="group relative m-auto max-w-6xl px-6">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:pr-6">
                  <p className="text-end text-sm">Onde já fiz a diferença</p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                    <Link
                      href="https://www.konstroi.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="mx-auto h-4 w-fit"
                        src="/logo/konstroi.png"
                        alt="Column Logo"
                        height="2000"
                        width="2000"
                      />
                    </Link>
                    <Link
                      href="https://staging-ong-gabriel.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="mx-auto h-4 w-fit"
                        src="/logo/ong-gabriel.svg"
                        alt="Column Logo"
                        height="2000"
                        width="2000"
                      />
                    </Link>
                    <Link
                      href="https://playdevs.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="mx-auto h-4 w-fit"
                        src="/logo/playdevs.png"
                        alt="Column Logo"
                        height="2000"
                        width="2000"
                      />
                    </Link>
                    <Link
                      href="https://github.com/LovelaceLines"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="mx-auto h-4 w-fit"
                        src="/logo/lovelace-lines.svg"
                        alt="Column Logo"
                        height="2000"
                        width="2000"
                      />
                    </Link>
                  </InfiniteSlider>

                  <div className="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r"></div>
                  <div className="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l"></div>
                  <ProgressiveBlur
                    className="pointer-events-none absolute top-0 left-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute top-0 right-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </section>
      </main>
    </>
  );
};
