import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
      formats: ["es"],
      fileName: "index",
    },
  },
  plugins: [dts()],
});
