import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === 'production' ? '/timer-app/' : '/'
// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
