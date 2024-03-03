import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/healthz", (c) => {
  return c.json({
    success: true,
    now: new Date(),
  });
});

const GET = app.fetch;
const POST = app.fetch;
const PUT = app.fetch;
const DELETE = app.fetch;
export { GET, POST, PUT, DELETE };
