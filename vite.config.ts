import { defineConfig } from 'vite'
import mdPlugin, { Mode } from 'vite-plugin-markdown'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [solidPlugin(), mdPlugin({ mode: [Mode.HTML] }), tsconfigPaths()],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
})
