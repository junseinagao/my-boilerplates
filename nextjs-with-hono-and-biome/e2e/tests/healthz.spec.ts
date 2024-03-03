import { expect, test } from "@playwright/test";

test("health check", async ({ request }) => {
  const response = await request.get("/api/healthz");
  expect(response.status()).toBe(200);
});
