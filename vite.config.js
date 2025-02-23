// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import mdx from '@mdx-js/rollup';

// export default defineConfig({
//     plugins: [mdx(), react()],
//     resolve: {
//         alias: {
//             '@': '/src',
//         },
//     },
// });

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
    plugins: [
        {
            enforce: 'pre',
            ...mdx({
                providerImportSource: '@mdx-js/react',
            }),
        },
        react(),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
