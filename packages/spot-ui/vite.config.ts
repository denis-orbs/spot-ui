import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    // Replace process.env.NEXT_PUBLIC_MODE at build time
    // Pass MODE=prod or MODE=dev when building: MODE=prod pnpm build:spot-ui
    'process.env.NEXT_PUBLIC_MODE': JSON.stringify(process.env.MODE || 'prod'),
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SpotSDK',
      fileName: 'spot-ui',
    },
  },
})

