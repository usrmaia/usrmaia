import type { Metadata } from 'next';

import { AppBar } from '@/_components';
import { metadata as baseMetadata } from './document';
import { Container } from '@mui/material';

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <AppBar mode='portfolio' />
      <Container>
        {children}
      </Container>
    </>
  );
}
