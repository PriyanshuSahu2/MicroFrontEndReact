import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "PostRFQ",
      filename: "remoteEntry.js",
      exposes: {
        "./PostRFQPage": "./src/App.jsx",
      },

      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
      manifest: true,
      format: "esm",
    }),
  ],
  server: { port: 3003 },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  css: {
    devSourcemap: true,
  },
});
