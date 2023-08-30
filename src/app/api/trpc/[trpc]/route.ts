import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/src/server";
import { createContext } from "@/src/server/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
  });

export { handler as GET, handler as POST };
