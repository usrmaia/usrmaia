import { FuseResult } from 'fuse.js';
import { NextRequest, NextResponse } from 'next/server';
import { Post } from '@prisma/client';

import { searchPosts } from '@/_libs';

export const dynamic = 'force-dynamic';

// api/post?query=[query]
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (query) {
    const results: FuseResult<Post>[] = await searchPosts(query);
    const posts: Post[] = results.map(result => result.item);
    return NextResponse.json(posts);
  }

  return new NextResponse('No query provided', { status: 400 });
}