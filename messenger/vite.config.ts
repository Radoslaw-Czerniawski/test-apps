import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import macrosPlugin from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    macrosPlugin(),
    viteCommonjs(),
    // {
    //   name: 'configure-response-headers',
    //   configureServer: server => {
    //     server.middlewares.use((_req, res, next) => {
    //       res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    //       res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    //       next();
    //     });
    //   },
    // },
  ],
});
