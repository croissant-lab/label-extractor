import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: '/src/index.ts',
      output: {
        format: 'commonjs',
        dir: 'dist',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
      }
    }
  }
})