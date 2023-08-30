import db from "@/prisma/client";
import { initTRPC } from "@trpc/server";

export function createContext() {
    return { db }
}

export type Context = ReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
