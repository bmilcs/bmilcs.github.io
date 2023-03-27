import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],

  // "@" becomes the default path for src
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    // fix plugin-react-swc error {
    preserveSymlinks: true,
  },
});
