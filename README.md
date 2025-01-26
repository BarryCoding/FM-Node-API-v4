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
