import { Box, Button, Typography } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import Image from 'next/image';

export default function NotFound() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap={2} width='100vw' height='100vh'>
      <Box display='flex' alignItems='center' width={{ xs: '80vw', md: '50vw', lg: '30vw' }}>
        <Image src='https://c.tenor.com/ftaDAT-sWg4AAAAC/tenor.gif' alt='Imagem d' width={1080} height={1080} style={{ width: '100%', height: 'auto' }} />
      </Box>

      <Box>
        <Typography variant='h1'>404</Typography>
        <Typography variant='body1'>Página não encontrada :/</Typography>
      </Box>

      <Button variant='contained' href='javascript:history.back()' startIcon={<ArrowBackIos />}>
        Voltar para a página anterior
      </Button>
      <Button href='/'>
        Ir para a página inicial
      </Button>
    </Box>
  );
}