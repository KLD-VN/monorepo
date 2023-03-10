import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@atoms',
        replacement: path.resolve(__dirname, 'src/components/atoms'),
      },
      {
        find: '@molecules',
        replacement: path.resolve(__dirname, 'src/components/molecules'),
      }
    ],
  },
});
