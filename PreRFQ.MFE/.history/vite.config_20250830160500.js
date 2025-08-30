import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "PreRFQ",
      filename: "remoteEntry.js",
      exposes: {
        "./PreRFQPage": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext", // ⚡ important
  },
  server: { port: 3001 },
});
