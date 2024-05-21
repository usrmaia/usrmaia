import { About } from './about';
import { Blog } from './blog';
import { Contact } from './contact';
import { Technologies } from './technologies';
import { Portfolio } from './portfolio';
import { Welcome } from './welcome';
import { WorkProcess } from './work-process';

export default function Home() {
  return (
    <>
      <br />
      <Welcome />
      <br />
      <Technologies />
      <br />
      <Portfolio />
      <br />
      <WorkProcess />
      <br />
      <Blog />
      <br />
      <About />
      <br />
      <Contact />
      <br />
    </>
  );
}