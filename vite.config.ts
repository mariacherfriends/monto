import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Stub out Figma-specific virtual modules so the build works outside Make
const figmaStubPlugin = {
  name: 'figma-stub',
  resolveId(id) {
    if (id === 'figma:foundry-client-api') return '\0figma-stub'
    if (id.startsWith('figma:asset/')) return '\0figma-asset:' + id.slice(12)
    return null
  },
  load(id) {
    if (id === '\0figma-stub') return 'export default {}'
    if (id.startsWith('\0figma-asset:')) return 'export default ""'
    return null
  },
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaStubPlugin,
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
