import { Box, Container } from '@mui/material';

import { AppBar } from '@/_components';
import { metadata as baseMetadata } from './document';

export const metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppBar mode='blog' />
      <Container>
        <Box paddingY={2}>
          {children}
        </Box>
      </Container>
    </>
  );
}
