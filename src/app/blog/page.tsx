import { Box, Container, Typography } from '@mui/material';

import { Pagination, PostFlatData, TagList } from '@/_components';
import env from '@/env';
import { getAllPosts, getAllTags } from '@/_libs';

export default async function Blog() {
  const allPosts = await getAllPosts(1, env.POSTS_PER_PAGE);
  const tags = await getAllTags();

  return (
    <>
      <Typography variant='h4' fontWeight='900' align='center'>
        Blog
      </Typography>

      <br />

      <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
        <TagList tags={tags} />

        <Container maxWidth='md' disableGutters>
          <Box display='flex' flexDirection='column' gap={2}>
            {allPosts.map(post =>
              <PostFlatData key={post.slug} post={post} />
            )}
          </Box>
        </Container>
      </Box>

      <Pagination params={{ slug: 'blog', page: 0 }} />
    </>
  );
}