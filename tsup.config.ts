import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/app.ts", "src/cli.ts", "src/schedule.ts", "src/queue.ts", "!src/**/*.spec.*", "!src/**/*.test.*"],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  loader: {
    ".hbs": "copy"
  }
});
