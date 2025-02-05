import { setupServer } from "msw/node";
import { handlers } from "./handlers"; // Reuse your existing API handlers

export const server = setupServer(...handlers);
