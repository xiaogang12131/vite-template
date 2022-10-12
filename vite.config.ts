import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import myPlugin from './plugins/vite-plugin-my-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      store: resolve(__dirname, 'src/store'),
      components: resolve(__dirname, 'src/components'),
    },
  },
});
