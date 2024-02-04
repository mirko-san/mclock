import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'MClock',
      fileName: (format) => `m-clock.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  server: {
    port: 3001,
  }
});
