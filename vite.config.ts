import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/m-clock.ts',
      name: 'MClock',
      fileName: (format) => `m-clock.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    },
  },
  server: {
    port: 3080,
  }
});
