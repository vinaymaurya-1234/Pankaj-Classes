// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',                 // Root directory (default current folder)
  build: {
    outDir: 'dist',          // Output folder for build
    rollupOptions: {
      input: 'index.html',   // Specify the entry file
    },
  },
});
