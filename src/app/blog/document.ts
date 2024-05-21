import type { Metadata } from 'next';

import env from '@/env';
import { openGraph } from '@/_shared';

const blogURL = env.APP_URL + '/blog';

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: 'SRMA.IA - %s',
  },
  description: 'Este é o meu blog, onde você pode encontrar artigos sobre desenvolvimento de software, tecnologia e outros assuntos relacionados.',
  abstract: 'Este é o meu blog, onde você pode encontrar artigos sobre desenvolvimento de software, tecnologia e outros assuntos relacionados.',
  category: 'desenvolvimento de software',
  openGraph: {
    ...openGraph,
    description: '',
    url: blogURL,
  },
  appLinks: {
    ios: {
      app_name: 'SRMA.IA',
      url: blogURL,
    },
    web: {
      should_fallback: true,
      url: blogURL,
    },
    windows: {
      app_name: 'SRMA.IA',
      url: blogURL,
    },
  }
};