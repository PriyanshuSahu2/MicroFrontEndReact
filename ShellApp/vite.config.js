import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "Shell",
      remotes: {
        preRfq: {
          type: "module",
          name: "preRfq",
          entry: "http://localhost:3001/remoteEntry.js",
        },
        rfq: {
          type: "module",
          name: "rfq",
          entry: "http://localhost:3002/remoteEntry.js",
        },
        postRfq: {
          type: "module",
          name: "postRfq",
          entry: "http://localhost:3003/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: { port: 3000 },
});
