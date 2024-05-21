import { Box } from '@mui/material';

import env from '@/env';
import { Pagination, PostFlatData } from '@/_components';
import { getAllPosts } from '@/_libs';

export default async function Page({ params: { page } }: { params: { page: number } }) {
  const posts = await getAllPosts(page, env.POSTS_PER_PAGE);

  return (
    <Box>
      {posts.map(post =>
        <PostFlatData key={post.slug} post={post} />
      )}
      <Pagination params={{ slug: 'blog', page: page }} />
    </Box>
  );
}
