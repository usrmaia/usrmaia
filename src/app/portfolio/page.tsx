import { Container } from '@mui/material';

import { About } from './about';
import { Blog } from './blog';
import { Footer } from './footer';
import { Technologies } from './technologies';
import { Portfolio } from './portfolio';
import { Welcome } from './welcome';
import { WorkProcess } from './work-process';

export default function Home() {
  return (
    <Container>
      <Welcome />
      <Technologies />
      <Portfolio />
      <WorkProcess />
      <Blog />
      <About />
      <Footer />
    </Container>
  );
}