import type { Metadata } from "next";

export const metadata = (): Metadata => ({
  title: {
    default: "George Maia - Desenvolvedor Full-Stack | Portfólio",
    template: "%s | George Maia - Dev Full-Stack",
  },
  description:
    "George Maia, desenvolvedor full-stack especializado em React, Next.js, Python e Django. Transformo ideias em soluções digitais completas para startups e empresas. Portfólio com projetos reais e impactantes.",
  keywords: [
    // Palavras-chave técnicas
    "desenvolvedor full-stack",
    "React",
    "Next.js",
    "Python",
    "Django",
    "FastAPI",
    ".NET",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "PostgreSQL",
    "SQL Server",
    "Docker",
    "Git",
    "API REST",
    "desenvolvimento web",
    "frontend",
    "backend",

    // Palavras-chave de carreira
    "portfólio desenvolvedor",
    "desenvolvedor pleno",
    "contratar desenvolvedor",
    "freelancer desenvolvedor",
    "desenvolvedor Fortaleza",
    "desenvolvedor Brasil",
    "startups",
    "desenvolvimento ágil",
    "clean code",
    "arquitetura limpa",

    // Palavras-chave de nicho
    "George Maia",
    "SRMA.IA",
    "UFC",
    "Ciência da Computação",
    "desenvolvimento para startups",
    "soluções digitais",
    "transformação digital",
  ],
  authors: [{ name: "George Maia", url: "https://github.com/usrmaia" }],
  creator: "George Maia",
  publisher: "George Maia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "George Maia - Desenvolvedor Full-Stack",
    title:
      "George Maia - Desenvolvedor Full-Stack | Transformando Ideias em Soluções Digitais",
    description:
      "Desenvolvedor full-stack especializado em criar soluções digitais completas para startups e empresas. Experiência com Next.js, FastAPI, .NET e muito mais.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "George Maia - Desenvolvedor Full-Stack",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "George Maia - Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor full-stack especializado em React, Next.js, Python e Django. Transformo ideias em soluções digitais para startups.",
    images: ["/opengraph-image.jpg"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    //   "google-site-verification":
  },
});
