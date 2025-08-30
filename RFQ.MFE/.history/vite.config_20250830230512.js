import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
    plugins: [
        react(),

        federation({
            name: 'RFQ',
            filename: 'remoteEntry.js',
            exposes: {
                './RFQPage': './src/App.jsx',
            },
            format: 'esm',
            manifest: true,
            shared: ['react', 'react-dom'],
        }),
    ],
    server: { port: 3002 },
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    css: {
        devSourcemap: true,
    }
});
