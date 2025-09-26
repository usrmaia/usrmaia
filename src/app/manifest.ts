import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "George Maia - Desenvolvedor Full-Stack",
    short_name: "George Maia Dev",
    description:
      "Portfólio de George Maia, desenvolvedor full-stack especializado em soluções digitais para startups e empresas",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo/logo-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    categories: ["business", "developer-tools", "productivity"],
    lang: "pt-BR",
    orientation: "portrait-primary",
  };
}
