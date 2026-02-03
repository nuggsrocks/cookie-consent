import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
      name: "CookieConsent",
      formats: ["iife"],
      fileName: "consent",
    },
  },
});
