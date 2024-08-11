import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    ViteMinifyPlugin(),
    svgr({
      include: '**/*.svg',
    }),
    tsconfigPaths(),
    chunkSplitPlugin(),
  ],
  envDir: './env',
  build: {
    sourcemap: false,
  },
});
