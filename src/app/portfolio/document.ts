import type { Metadata } from 'next';

import env from '@/env';
import { openGraph } from '@/_shared';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Este é o meu portfólio, onde você pode encontrar informações sobre mim e meus projetos. Se você gostou do que viu, entre em contato comigo para discutirmos como posso ajudar você a alcançar seus objetivos.',
  abstract: 'Este é o meu portfólio, onde você pode encontrar informações sobre mim e meus projetos. Se você gostou do que viu, entre em contato comigo para discutirmos como posso ajudar você a alcançar seus objetivos.',
  category: 'desenvolvimento de software',
  openGraph: {
    ...openGraph,
    description: '',
    url: env.APP_URL,
  },
  appLinks: {
    ios: {
      app_name: 'SRMA.IA',
      url: env.APP_URL,
    },
    web: {
      should_fallback: true,
      url: env.APP_URL,
    },
    windows: {
      app_name: 'SRMA.IA',
      url: env.APP_URL,
    },
  }
};