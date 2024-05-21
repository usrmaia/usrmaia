import Fuse, { IFuseOptions } from 'fuse.js';
import { Author, Post } from '@prisma/client';

import { getAllPosts } from '@/_libs';

let fuse: Fuse<Post> | undefined;

export const loadFuse = async () => {
  if (fuse) return fuse;

  const list = await getAllPosts();

  const options: IFuseOptions<Post> = {
    minMatchCharLength: 3,
    keys: [
      'title',
      'descriptionUI',
      'excerpt',
      'tags',
      'slugAuthors',
      'content',
    ],
  };

  fuse = new Fuse(list, options);
  return fuse;
};

export const searchPosts = async (query: string) => {
  const fuse = await loadFuse();
  return fuse.search(query);
};

export async function getRecommendedPosts(author?: Author, post?: Post & { authors: Author[] }, limit = 3) {
  if (!author && !post) throw new Error('post and author cannot be undefined at the same time');

  const fuse = await loadFuse();

  const pattern = author && post ? author.name + '\n' + author.descriptionUI + '\n' + post.authors.join(', ') + '\n' + post.descriptionUI + '\n' + post.content :
    author ? author.name + '\n' + author.descriptionUI :
      post ? post.descriptionUI + '\n' + post.content : '';

  const result = fuse.search(pattern, { limit: limit + 1 });

  return result
    .filter(({ item }) => !post || item.slug !== post.slug) // remove the post itself if it exists
    .map(({ item }) => item); // return only the posts
}