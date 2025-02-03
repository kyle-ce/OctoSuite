import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { server } from "./mocks/server"; // Import your MSW setup
import { beforeAll, afterEach, afterAll } from "vitest"; // If using Jest, replace with `jest`

// Start the server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test (avoid cross-test interference)
afterEach(() => server.resetHandlers());

// Close the server after all tests
afterAll(() => server.close());

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
