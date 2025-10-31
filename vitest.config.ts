import path from "path";
import { defineConfig } from "vitest/config";
import "./src/config/dotenv";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  test: {
    include: ["src/**/*.{spec,test}.ts"],
    setupFiles: ["./tests/mocks/index.ts"],
    globals: true
  }
});
