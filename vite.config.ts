import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/story-engine-next/' : '/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    passWithNoTests: true,
  },
})
