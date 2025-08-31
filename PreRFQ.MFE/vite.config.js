import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'PreRFQ',
            filename: 'remoteEntry.js',
            exposes: {
                "./Routes": "./src/routes.jsx",   
              },
            format: 'esm',
            manifest: true,
            shared: ['react', 'react-dom','react-router-dom'],
        }),
    ],
    server: { port: 3001 },
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    css: {
        devSourcemap: true,
    }
});
