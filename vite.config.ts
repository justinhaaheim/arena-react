import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',  // Use the same output directory as CRA
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,  // Match CRA's default port
    open: true,
  },
});
