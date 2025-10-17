import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/my-superapp-2/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "./docs",
    assetsDir: "",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
