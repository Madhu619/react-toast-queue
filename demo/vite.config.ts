import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const libDir = fileURLToPath(new URL("../src", import.meta.url));
const repoRoot = fileURLToPath(new URL("..", import.meta.url));

export default defineConfig({
  plugins: [react()],
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
