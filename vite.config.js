import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
    plugins: [react(), mdx()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    optimizeDeps: {
        include: ['react/jsx-runtime'],
    },
    build: {
        rollupOptions: {
            input: {
                main: '/index.html',
            },
        },
    },
});
