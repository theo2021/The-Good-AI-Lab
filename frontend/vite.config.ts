import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const baseUrl = process.env.VITE_BASE_URL || '/';
  
  return {
    base: baseUrl,
    plugins: [
      react(),
      ViteYaml(),
    ],
    optimizeDeps: {
      exclude: ['lucide-react'],
      include: ['@modyfi/vite-plugin-yaml']
    },
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  };
});
