# Project

## init

```zsh
mkdir my-project
cd my-project
npm init
pnpm add express
pnpm add -D typescript ts-node @types/node @types/express prisma
git init
```

copy file
- .gitignore
- tsconfig.json

## prisma data model

- vscode extension: prisma

```zsh
npx prisma init
```

- create a [Render](https://dashboard.render.com/) PostgreSQL database

- update `.env` by the above External Database URL

- create Prisma models
  - User
  - Product
  - Update
  - UpdatePoint

### Migration

run migration as schema changes to sync with DB

```bash
pnpm add @prisma/client

npx prisma migrate dev --name init

# reset if needed
npx prisma migrate reset
```

## Routes and Middleware

- RESTful API routes
  - /product
  - /update
  - /updatepoint

- vscode extension: thunder client
  - test /api/product