import { appRouter } from "@/src/server";
import db from "@/prisma/client";

export const serverClient = appRouter.createCaller({
  db,
});
