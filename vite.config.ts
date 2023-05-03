import { defineConfig } from "vite";

export default defineConfig(({}) => {
  return {
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
      target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
    },
  }
})
