import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import myPlugin from './plugins/vite-plugin-my-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      store: resolve(__dirname, 'src/store'),
      components: resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        math: 'always',
      },
    },
  },
});
