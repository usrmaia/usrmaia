// Usage: npx prisma db seed

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const authors: Prisma.AuthorCreateInput[] = [
  {
    id: 'srma.ia',
    name: 'srma.ia',
    slug: 'srma.ia',
    descriptionUI: '',
    descriptionMeta: '',
    avatarPath: '/blog/authors/srma.ia/avatar.jpg',
    coverImagePath: '/blog/authors/srma.ia/cover.jpg',
    occupation: 'Desenvolvedor FullStack',
    company: 'srma.ia',
    email: 'georgemaiaf@gmail.com',
    instagram: 'https://www.instagram.com/srma.ia',
    twitter: 'https://twitter.com/Usrmaia',
    linkedin: 'https://www.linkedin.com/in/srmaia/',
    github: 'https://github.com/usrmaia',
  },
];

const posts: Prisma.PostCreateInput[] = [
  {
    id: 'consultas-com-fusejs',
    title: 'Consultas com Fuse.js',
    slug: 'consultas-com-fusejs',
    descriptionUI: '✨ Esta biblioteca de pesquisa difusa para JavaScript e TypeScript vai transformar a forma como você busca dados em seus projetos 🚀',
    descriptionMeta: '✨ Esta biblioteca de pesquisa difusa para JavaScript e TypeScript vai transformar a forma como você busca dados em seus projetos 🚀',
    coverImagePath: '/blog/posts/consultas-com-fusejs/cover.png',
    dateCreated: '2024-03-16T05:35:07.322Z',
    dateLastModified: '2024-03-16T05:35:07.322Z',
    nextPostId: '',
    prevPostId: '',
    content: '',
    authors: {
      connect: [
        {
          id: 'srma.ia',
        },
      ],
    },
  },
  {
    id: 'manipulando-erros-de-sua-api-net',
    title: 'Manipulando erros de sua API .Net 🚀',
    slug: 'manipulando-erros-de-sua-api-net',
    descriptionUI: '🔥 Aprenda a manipular os erros de sua API .Net de forma eficiente e elegante 🚀',
    descriptionMeta: '🔥 Aprenda a manipular os erros de sua API .Net de forma eficiente e elegante 🚀',
    coverImagePath: '/blog/posts/manipulando-erros-de-sua-api-net/cover.png',
    dateCreated: '2024-03-16T05:35:07.322Z',
    dateLastModified: '2024-03-16T05:35:07.322Z',
    nextPostId: '',
    prevPostId: '',
    content: '',
    authors: {
      connect: [
        {
          id: 'srma.ia',
        },
      ],
    },
  }
];

const summaries: Prisma.SummaryCreateInput[] = [
  {
    id: '1',
    title: 'Consultas com Fuse.js 🔎',
    to: 'consultas-com-fusejs-',
    post: {
      connect: {
        id: 'consultas-com-fusejs',
      },
    },
  },
];

const tags: Prisma.TagCreateInput[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    slug: 'frontend',
    posts: {
      connect: [
        {
          id: 'consultas-com-fusejs',
        },
      ],
    },
  },
  {
    id: 'backend',
    name: 'Backend',
    slug: 'backend',
    posts: {
      connect: [
        {
          id: 'manipulando-erros-de-sua-api-net',
        },
      ],
    },
  },
];

async function main() {
  console.log('Start seeding ...');

  for (const data of authors) {
    const authorCreated = await prisma.author.create({ data });
    console.log(`Created author with id: ${authorCreated.id}`);
  }

  for (const data of posts) {
    const postCreated = await prisma.post.create({ data });
    console.log(`Created post with id: ${postCreated.id}`);
  }

  for (const data of summaries) {
    const summaryCreated = await prisma.summary.create({ data });
    console.log(`Created summary with id: ${summaryCreated.id}`);
  }

  for (const data of tags) {
    const tagCreated = await prisma.tag.create({ data });
    console.log(`Created tag with id: ${tagCreated.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch(error => console.error('Error during seeding: ', error))
  .finally(async () => await prisma.$disconnect());