import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // auto-opens browser
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // allows "@/components/..." etc.
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
});

