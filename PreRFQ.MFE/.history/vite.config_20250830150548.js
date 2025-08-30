import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'PreRFQ',
            filename: 'remoteEntry.js',
            exposes: {
                './PreRFQPage': './src/pages/PreRFQ.jsx'
            },
            shared: ['react', 'react-dom']
        })
    ],
    server: { port: 3001 }
});
