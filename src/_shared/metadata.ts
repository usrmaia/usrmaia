import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

import env from '@/env';

export const openGraph: OpenGraph = {
  type: 'website',
  locale: 'pt_BR',
  title: 'SRMA.IA',
  // TODO: Add a description
  description: 'Conheça a SRMA.IA e descubra como podemos lhe ajudar a alcançar seus objetivos!',
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