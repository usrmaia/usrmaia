import type { Metadata } from 'next';

import env from '@/env';
import { openGraph } from '@/_shared';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: '',
  abstract: '',
  category: '',
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