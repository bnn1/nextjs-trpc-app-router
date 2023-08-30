# tRPC + Next.js App Router

## Installation
1. `pnpm install --frozen-lockfile`
1. `pnpm prisma generate`
1. rename `.env.example` -> `.env.local`
1. `pnpm db:start`
1. wait for database to start (about 30 seconds)
1. `pnpm db:migrate`
1. start the app `pnpm dev` or `pnpm build && pnpm start`
1. visit `http://localhost:3000`