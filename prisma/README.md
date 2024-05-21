# Prisma Getting Started

## Install the Prisma CLI

```bash
npm install prisma @prisma/client --save-dev
```

## Explore the data in Prisma Studio

```bash
npx prisma studio
```

## Set up a new Prisma project

```bash
npx prisma init
```

```bash
npx prisma init --datasource-provider sqlite
```

## Generate artifacts (e.g. Prisma Client)

```bash
npx prisma generate
```

## Browse your data

```bash
npx prisma studio
```

## Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)

```bash
npx prisma migrate dev
```

```bash
npx prisma migrate dev --name init
```

## Pull the schema from an existing database, updating the Prisma schema

```bash
npx prisma db pull
```

## Push the Prisma schema state to the database

```bash
npx prisma db push
```

## Seed your database

```bash
npx prisma db seed
```

## Validate your Prisma schema

```bash
npx prisma validate
```

## Format your Prisma schema

```bash
npx prisma format
```

## Display Prisma version info

```bash
npx prisma version
```

## Display Prisma debug info

```bash
npx prisma debug
```
