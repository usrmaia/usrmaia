import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { colors } from '@/_theme';

export const Technologies = () => {
  return (
    <Box id='tecnologias'>
      <Typography variant='h6' align='center' gutterBottom>
        Estou atualmente em busca de uma equipe de desenvolvimento ágil, multidisciplinar, que valorize a aplicação de práticas como <span style={{ color: `${colors.primary}` }}>Extreme Programming (XP)</span>, <span style={{ color: `${colors.primary}` }}>Test-Driven Development (TDD)</span> e <span style={{ color: `${colors.primary}` }}>Continuous Integration (CI)</span> para a entrega de software de qualidade.
      </Typography>
      <Box sx={{ aspectRatio: { xs: '9/12', md: 'auto' } }}>
        <Image src='/landpage/technologies.svg' width={1920} height={1080} alt='Technologies' style={{ width: '-webkit-fill-available', height: '-webkit-fill-available', objectFit: 'cover', objectPosition: 'center' }} />
      </Box>
    </Box>
  );
};