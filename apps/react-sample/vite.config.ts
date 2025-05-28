/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/react-sample',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'bali-card': ['./src/app/components/Card1'],
          'tokyo-card': ['./src/app/components/Card2'],
          'paris-card': ['./src/app/components/Card3'],
          'newyork-card': ['./src/app/components/Card4'],
          'rome-card': ['./src/app/components/Card5'],
          'sydney-card': ['./src/app/components/Card6'],
          'dubai-card': ['./src/app/components/Card7'],
          'bangkok-card': ['./src/app/components/Card8'],
          'iceland-card': ['./src/app/components/Card9'],
          'hawaii-card': ['./src/app/components/Card10'],
          'santorini-card': ['./src/app/components/Card11'],
          'machupicchu-card': ['./src/app/components/Card12'],
        }
      }
    }
  },
}));
