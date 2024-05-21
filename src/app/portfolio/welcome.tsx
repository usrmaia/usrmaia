import { Box, Button, Chip, Grid, SxProps, Theme, Typography } from '@mui/material';
import Link from 'next/link';

const Title = (): JSX.Element => (
  <>
    <Box display='flex' flexDirection='row' alignItems='center' gap={{ xs: 2, sm: 8 }}>
      <Typography variant='h2' fontWeight='900' align='left' gutterBottom>
        Oi,
      </Typography>
      <Chip label='Desenvolvedor Full-Stack' color='primary' />
    </Box>
    <Typography variant='h3' fontWeight='900' align='left' gutterBottom>
      George Maia aqui!!!
    </Typography>
  </>
);

const Buttons = (): JSX.Element => (
  <Box display='flex' gap={2}>
    <Button variant='contained' color='primary' component={Link} href='#contato'>
      Sobre mim
    </Button>
    <Button variant='outlined' color='primary' component={Link} href='#portfolio'>
      Projetos
    </Button>
  </Box>
);

const backgroundStyle: SxProps<Theme> = {
  backgroundImage: 'url(/landpage/profile-1.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};

export const Welcome = () => {
  return (
    <Grid id='bem-vindo' container spacing={4}>
      <Grid item xs={12} sm={8} md={6} display='flex' flexDirection='column' justifyContent='center' height='100vh'>
        <Title />
        <br />
        <Typography variant='subtitle1' align='left' gutterBottom>
          Este é o meu portfólio, onde você pode encontrar informações sobre mim e meus projetos. Se você gostou do que viu, entre em contato comigo para discutirmos como posso ajudar você a alcançar seus objetivos.
        </Typography>
        <br />
        <Buttons />
      </Grid>
      <Grid item xs={12} sm={4} md={6}>
        <Box sx={backgroundStyle} />
      </Grid>
    </Grid>
  );
};