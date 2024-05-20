import { AppBar as AppBarMUI, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Email, GitHub, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

import env from '@/env';
import { colors } from '@/_theme';

const Logo = (): JSX.Element => (
  <Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
    <Image src='landpage/srma.ia-logo-v1.svg' alt='srma.ia Logo' width={100} height={50} />
  </Link>
);

const Navigation = (): JSX.Element => (
  <>
    <Link href='#tecnologias' passHref style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant='button'>
        Tecnologias
      </Typography>
    </Link >
    <Link href='#portfolio' passHref style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant='button'>
        Portfólio
      </Typography>
    </Link >
    <Link href='#blog' passHref style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant='button'>
        Blog
      </Typography>
    </Link >
    <Link href='#sobre' passHref style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant='button'>
        Sobre
      </Typography>
    </Link>
  </>
);

const SocialMedia = (): JSX.Element => (
  <>
    <IconButton color='inherit' sx={{ display: { xs: 'none', sm: 'flex' } }}>
    </IconButton>
    <IconButton color='inherit' href={env.GITHUB_PROFILE} target='_blank'>
      <GitHub />
    </IconButton>
    <IconButton color='inherit' href={env.LINKEDIN_PROFILE} target='_blank'>
      <LinkedIn />
    </IconButton>
    <IconButton color='inherit' href={env.WHATSAPP_PROFILE} target='_blank'>
      <WhatsApp />
    </IconButton>
    <IconButton color='inherit' href={env.INSTAGRAM_PROFILE} target='_blank'>
      <Instagram />
    </IconButton>
    <IconButton color='inherit' href={`mailto:${env.EMAIL}`}>
      <Email />
    </IconButton>
  </>
);

export const AppBar = () => {
  return (
    <AppBarMUI position='sticky' color='transparent' elevation={0} sx={{ bgcolor: `${colors.primary}` }}>
      <Toolbar>
        <Container maxWidth='lg'>
          <Grid container display='flex'>
            <Grid item xs={5} sm={4} md={4} lg={4} display='flex'>
              <Logo />
            </Grid>
            <Grid item xs={0} sm={0} md={4} lg={4} display={{ xs: 'none', md: 'flex' }} justifyContent='center' alignItems='center' gap={4}>
              <Navigation />
            </Grid>
            <Grid item xs={7} sm={8} md={4} lg={4} display='flex' justifyContent='flex-end' alignContent='center'>
              <SocialMedia />
            </ Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBarMUI >
  );
};