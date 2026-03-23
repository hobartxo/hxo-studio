import { defineConfig } from 'vite'

export default defineConfig({
  // Ensure Vite treats this as a multi-page static site.
  // We keep the existing landing page at / and add demo product pages.
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        demoCodeWatcher: 'demo/code-watcher/index.html',
        demoTokenOpsNinja: 'demo/tokenops-ninja/index.html',
      },
    },
  },
})
