import Link from 'next/link';
import { Box, IconButton, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn, Mail, WhatsApp } from '@mui/icons-material';

import env from '@/env';
import { colors } from '@/theme';

export const Footer = () => {
  const SocialLinks = () => (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Link href={env.WHATSAPP_PROFILE} target='_blank' rel='noopener'>
        <IconButton color='primary'>
          <WhatsApp />
        </IconButton>
      </Link>
      <Link href={env.LINKEDIN_PROFILE} target='_blank' rel='noopener'>
        <IconButton color='primary'>
          <LinkedIn />
        </IconButton>
      </Link>
      <Link href={env.INSTAGRAM_PROFILE} target='_blank' rel='noopener'>
        <IconButton color='primary'>
          <Instagram />
        </IconButton>
      </Link>
      <Link href={env.GITHUB_PROFILE} target='_blank' rel='noopener'>
        <IconButton color='primary'>
          <GitHub />
        </IconButton>
      </Link>
      <Link href={`mailto:${env.EMAIL}`} target='_blank' rel='noopener'>
        <IconButton color='primary'>
          <Mail />
        </IconButton>
      </Link>
    </Box>
  );

  return (
    <Box component='footer' display='flex' flexDirection='column' alignItems='center' gap={2} py={4}>
      <Typography variant='h4'>Entre em Contato</Typography>
      <Typography variant='subtitle1'>Gostaria de discutir oportunidades, colaborações ou simplesmente trocar ideias? Estou sempre aberto a novas conexões e projetos empolgantes.</Typography>
      <SocialLinks />
      <Typography variant='subtitle2'>© 2024 - Desenvolvido por <Link href={env.WHATSAPP_PROFILE} style={{ color: colors.primary }} target='_blank' rel='noopener'>George Maia</Link></Typography>
    </Box>
  );
};