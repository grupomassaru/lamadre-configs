// @grupolamadre/configs — Vite base config
// Usage:
//   import { defineConfig, mergeConfig } from 'vite'
//   import lamadreViteBase from '@grupolamadre/configs/vite'
//   export default mergeConfig(lamadreViteBase, defineConfig({ ... }))

import { defineConfig, type UserConfig } from 'vite';

const lamadreViteBase: UserConfig = defineConfig({
  build: {
    // Target modern browsers only (aligns with Lamadre V2 support matrix)
    target: 'es2020',

    // Warn when chunks exceed 500kb, error above 1mb
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Manual chunk splitting — keeps initial bundle lean
        manualChunks: {
          // React core — changes rarely, high cache hit
          react: ['react', 'react-dom', 'react-router-dom'],

          // UI component library (shadcn/ui deps)
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
            'lucide-react',
          ],

          // Supabase client — isolated for easy version bumps
          supabase: ['@supabase/supabase-js'],

          // Charting / data viz — heavy, rarely changes
          charts: ['recharts'],
        },
      },
    },
  },

  // Optimise deps for faster dev server startup
  optimizeDeps: {
    include: ['react', 'react-dom', '@supabase/supabase-js'],
  },
});

export default lamadreViteBase;
