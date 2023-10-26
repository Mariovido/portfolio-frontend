/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/setupTests.ts'],
      coverage: {
        provider: 'v8',
        all: true,
        exclude: [
          'data/**',
          'src/models/',
          'src/config/',
          'src/main.tsx',
          '*.cjs',
          '**/variants/**',
          '**/*.d.ts',
        ],
      },
    },
    base: env.VITE_REACT_APP_BASE_URL,
  };
});
