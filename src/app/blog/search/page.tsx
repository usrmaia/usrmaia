'use client';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React, { Suspense, useCallback, useState } from 'react';

import { Post } from '@prisma/client';

const queryResults = async (query: string) => {
  try {
    const res = await fetch(`/api/post?query=${query}`, { method: 'GET' });
    return await res.json() as Post[];
  } catch { return [] as Post[]; }
};

export default function Page() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement | HTMLDivElement>) => {
    event.preventDefault();

    if (query) setPosts(await queryResults(query));
  }, [query]);

  const handleKeyUp = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'Enter': return handleSubmit(event);
      case 'Escape': return setQuery('');
    }
  }, [handleSubmit]);

  return (
    <Suspense>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={10}>
            <TextField
              fullWidth
              label='Buscar postagens'
              variant='outlined'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleKeyUp}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
      <br />
      {/* TODO: Add a loading spinner and container to the posts */}
      <Box display='flex' flexDirection='column' gap={1}>
        {posts && posts.map(post => (
          <>
            <Link href={`/blog/${post.slug}`} passHref style={{ color: 'inherit' }}>
              <Typography variant='h6'>{post.title}</Typography>
            </Link>
            <Typography variant='body2'>{post.descriptionUI}</Typography>
          </>
        ))}
      </Box>
    </Suspense>
  );
}