import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const libDir = fileURLToPath(new URL("../src", import.meta.url));
const repoRoot = fileURLToPath(new URL("..", import.meta.url));

export default defineConfig({
  base: "/react-toast-queue/",
  plugins: [react()],
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@lib": libDir,
    },
  },
  server: {
    fs: {
      allow: [repoRoot],
    },
  },
});
