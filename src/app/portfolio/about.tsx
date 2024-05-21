import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';

const backgroundStyle: SxProps<Theme> = {
  backgroundImage: 'url(/landpage/welcome-background-2.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh',
  width: '100%',
};

export const About = () => {
  return (
    <Grid id='sobre' container spacing={4}>
      <Grid item xs={12} sm={4} md={6}>
        <Box sx={backgroundStyle} />
      </Grid>
      <Grid item xs={12} sm={8} md={6} display='flex' flexDirection='column' justifyContent='center' height='80vh'>
        <Typography variant='h4' fontWeight='900' gutterBottom>
          Um bit sobre mim
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Olá! Meu nome é George Maia e sou um desenvolvedor web full-stack. Sou apaixonado por .Net e Next e estou sempre procurando maneiras de expandir meu conhecimento e melhorar meu código e processos de desenvolvimento.
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Além das tecnologias sitadas, também tenho experiência com React, Node, Flask e Delphi; Git e Docker; SQL Server/Lite e Milvus.
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Adoro conteúdos como metodologias ágeis, arquitetura de software e testes automatizados, novas tecnologias e técnicas de desenvolvimento.
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Estou sempre aberto a novas oportunidades e desafios, então, se você tem um projeto interessante, entre em contato!
        </Typography>
      </Grid>
    </Grid>
  );
};