import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  // "@" becomes the default path for src
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    // fix plugin-react-swc error {
    preserveSymlinks: true,
  },
});
