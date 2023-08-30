import { z } from "zod";

import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.todo.findMany({ orderBy: { id: "asc" } });
  }),
  addTodo: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return ctx.db.todo.create({ data: { content: input, done: false } });
    }),
  setDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.todo.update({
        where: { id: input.id },
        data: { done: input.done },
      });
    }),
});

export type AppRouter = typeof appRouter;
