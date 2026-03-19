import { defineConfig } from 'vite'

export default defineConfig({
  // Ensure Vite treats this as a multi-page static site.
  // We keep the existing landing page at / and add /demo/code-watcher/.
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        demoCodeWatcher: 'demo/code-watcher/index.html',
      },
    },
  },
})
