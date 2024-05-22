import type { Metadata } from 'next';

import { PostFlatData, TagData } from '@/_components';
import { getAllTagsSlugs, getTagBySlug } from '@/_libs';

export const metadata: Metadata = {
  title: 'Tag',
};

export async function generateStaticParams() {
  const slugs = await getAllTagsSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const tag = await getTagBySlug(slug);

  return (
    <>
      <TagData tag={tag} />
      {tag.posts.map(post =>
        <PostFlatData key={post.slug} post={post} />
      )}
    </>
  );
}