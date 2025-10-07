import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/christian-movie-app/', // 👈 your GitHub repo name here
})
