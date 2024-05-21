import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

import env from '@/env';

export const openGraph: OpenGraph = {
  type: 'website',
  locale: 'pt_BR',
  title: 'SRMA.IA',
  description: 'Este é o meu portfólio, onde você pode encontrar informações sobre mim e meus projetos. Se você gostou do que viu, entre em contato comigo para discutirmos como posso ajudar você a alcançar seus objetivos.',
  images: [
    {
      url: '/metadata/og-image.jpg',
      width: 1920,
      height: 1080,
      alt: 'SRMA.IA',
    },
  ],
  url: env.APP_URL,
  phoneNumbers: [env.WHATSAPP_PROFILE],
  siteName: 'SRMA.IA',
};