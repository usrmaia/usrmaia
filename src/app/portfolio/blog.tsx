import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export const Blog = () => {
  return (
    <>
      <Typography variant='h4' gutterBottom align='center'>Blog</Typography>
      <br />
      <Box mx={{ sm: 2, md: 4, lg: 8 }}>
        <Link href='/blog'>
          <Image src='/blog-link-design.svg' alt='Blog link design' width={895.33} height={589.09} style={{ width: '-webkit-fill-available', height: 'auto' }} />
        </Link>
      </Box>
    </>
  );
};