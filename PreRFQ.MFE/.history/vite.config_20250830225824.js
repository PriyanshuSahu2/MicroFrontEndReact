import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "PreRFQ",
      filename: "remoteEntry.js",
      exposes: {
        "./PreRFQPage": "./src/App.jsx",
      },
      format: "esm",
      manifest: true,
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
  server: { port: 3001 },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  css: {
    devSourcemap: true,
  },
});
