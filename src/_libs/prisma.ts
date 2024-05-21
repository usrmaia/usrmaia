import { PrismaClient } from '@prisma/client';

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma ?? PrismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;