import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/entry.ts",
      name: "CookieConsent",
      formats: ["iife"],
      fileName: "consent",
    },
  },
});
