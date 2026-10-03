import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/link': path.resolve(__dirname, './src/shims/next-link.jsx'),
      'next/image': path.resolve(__dirname, './src/shims/next-image.jsx'),
      'next/navigation': path.resolve(__dirname, './src/shims/next-navigation.js'),
      'next-auth/react': path.resolve(__dirname, './src/shims/next-auth.jsx'),
      'next/font/google': path.resolve(__dirname, './src/shims/next-font.js'),
      'nextjs-toploader': path.resolve(__dirname, './src/shims/nextjs-toploader.jsx'),
      'next/server': path.resolve(__dirname, './src/shims/next-server.js'),
      'next': path.resolve(__dirname, './src/shims/next-root.js'),
    },
  },
  define: {
    'process.env.NEXT_PUBLIC_BASE_URL': '""',
    'process.env.SITE_NAME': '"SaasCandy"',
    'process.env.AUTHOR_NAME': '"Silicaman"',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
});
