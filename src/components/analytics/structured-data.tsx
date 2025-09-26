import Script from "next/script";

export const StructuredData = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "George Maia",
        givenName: "George",
        familyName: "Maia",
        alternateName: "SRMA.IA",
        description:
          "Desenvolvedor Full-Stack especializado em Next.js, FastAPI e .NET.",
        url: `${baseUrl}`,
        image: {
          "@type": "ImageObject",
          url: `${baseUrl}/landpage/profile-1.jpg`,
          width: 400,
          height: 400,
        },
        sameAs: [
          "https://github.com/usrmaia",
          "https://linkedin.com/in/usrmaia",
        ],
        jobTitle: "Desenvolvedor Full-Stack",
        worksFor: {
          "@type": "Organization",
          name: "Konstroi",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Universidade Federal do Ceará",
          alternateName: "UFC",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "Python",
          "Django",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Docker",
          "Clean Architecture",
          "Desenvolvimento Ágil",
          "Scrum",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
          addressRegion: "CE",
          addressLocality: "Fortaleza",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: "baseUrl",
        name: "George Maia - Desenvolvedor Full-Stack",
        description:
          "Portfólio de George Maia, desenvolvedor full-stack especializado em soluções digitais para startups e empresas",
        publisher: {
          "@id": "baseUrl/#person",
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: `${baseUrl}`,
        name: "George Maia - Desenvolvedor Full-Stack | Portfólio",
        description:
          "Transformo ideias em soluções digitais completas. Desenvolvedor full-stack com experiência em Next.js, FastAPI, .NET e muito mais.",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${baseUrl}/opengraph-image.jpg`,
        },
        datePublished: "2024-01-01T00:00:00-03:00",
        dateModified: new Date().toISOString(),
        inLanguage: "pt-BR",
      },
      {
        "@type": "ProfessionalService",
        "@id": "{baseUrl}/#service",
        name: "Desenvolvimento Full-Stack",
        description:
          "Serviços de desenvolvimento web completo, desde frontend até backend, para startups e empresas",
        provider: {
          "@id": `${baseUrl}/#person`,
        },
        areaServed: "BR",
        serviceType: "Desenvolvimento de Software",
        offers: [
          {
            "@type": "Offer",
            name: "Desenvolvimento Frontend",
            description:
              "Criação de interfaces modernas com React, Next.js e Tailwind CSS",
          },
          {
            "@type": "Offer",
            name: "Desenvolvimento Backend",
            description: "APIs robustas com FastAPI, .NET e Node.js",
          },
          {
            "@type": "Offer",
            name: "Consultoria Técnica",
            description:
              "Arquitetura de software, clean code e boas práticas de desenvolvimento",
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
