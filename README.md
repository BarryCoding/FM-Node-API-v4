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

```bash
pnpm add morgan cors
pnpm add -D @types/morgan @types/cors
```

### extra

```bash
pnpm add -D nodemon
```
- update scripts `"dev": "nodemon src/index.ts"`

## auth

```bash
pnpm add jsonwebtoken dotenv

pnpm add -D @types/jsonwebtoken
```

- load env with dotenv
- utils/auth
  - createJWT
  - protectedRoute


```bash
pnpm add bcrypt

pnpm add -D @types/bcrypt
```

- utils/auth
  - hashPassword
  - comparePasswords
- handlers/user
  - createUser
  - signIn
- `npx prisma studio`

## Route Error handlers

- validate inputs and handle errors

```bash
pnpm add express-validator
```

