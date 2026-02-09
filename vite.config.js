import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/iamavi/",
  build: {
    outDir: "build"
  },
  server: {
    port: 3000,
    open: true
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true
  }
});
