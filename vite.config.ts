import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: { index: "index.ts", next: "next.ts" },
    },
  },
});
