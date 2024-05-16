import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export const Welcome = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Image src='/landpage/welcome-background-1.jpg' alt='Welcome background' width={1080} height={1080} style={{ height: 'auto' }} />
      <Typography variant='h1' align='center' gutterBottom>
        Welcome to the portfolio of
      </Typography>
      <Typography variant='h2' align='center' gutterBottom>
        <Link href='https://www.linkedin.com/in/kevin-ramos-7a7a8b1a1/'>Kevin Ramos</Link>
      </Typography>
      <Typography variant='h3' align='center' gutterBottom>
        Full Stack Developer
      </Typography>
    </Box>
  );
}