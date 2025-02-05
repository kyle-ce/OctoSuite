import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { coverageConfigDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude, // Keep default exclusions
        "public/**",
        "mockServiceWorker.js",
        "src/mocks/browser.js",
        "tailwind.config.js",
        "postcss.config.js",
        "src/setupTests.ts",
        "src/main.tsx",
        "src/App.tsx",
      ],
    },
  },
});
