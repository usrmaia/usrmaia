import { AppBar as AppBarMUI, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Email, GitHub, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

import env from '@/env';
import { colors } from '@/_theme';

const Logo = (): JSX.Element => (
  <Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
    <Image src='logo/v1.svg' alt='srma.ia Logo' width={100} height={50} />
  </Link>
);

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLinksPortifolio: NavLinkProps[] = [
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#blog', label: 'Blog' },
  { href: '#sobre', label: 'Sobre' },
];

const NavLinksBlog: NavLinkProps[] = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog/search', label: 'Buscar' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/portfolio#sobre', label: 'Sobre' },
];

const Navigation = ({ navLinks }: { navLinks: NavLinkProps[] }): JSX.Element => (
  <>
    {navLinks.map(navLinks => (
      <Link key={navLinks.label} href={navLinks.href} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant='button'>
          {navLinks.label}
        </Typography>
      </Link>
    ))}
  </>
);

const SocialMedia = (): JSX.Element => (
  <>
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

export const AppBar = ({ mode }: { mode: 'portfolio' | 'blog' }): JSX.Element => {
  return (
    <AppBarMUI position='sticky' color='transparent' elevation={0} sx={{ bgcolor: `${colors.primary}` }}>
      <Toolbar>
        <Container maxWidth='lg'>
          <Grid container display='flex'>
            <Grid item xs={5} sm={4} md={4} lg={4} display='flex'>
              <Logo />
            </Grid>
            <Grid item xs={0} sm={0} md={4} lg={4} display={{ xs: 'none', md: 'flex' }} justifyContent='center' alignItems='center' gap={4}>
              <Navigation navLinks={mode === 'portfolio' ? NavLinksPortifolio : NavLinksBlog} />
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