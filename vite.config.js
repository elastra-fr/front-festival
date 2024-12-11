import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    https:{
      key: fs.readFileSync('./localhost.key'),  // Chemin vers la clé privée
      cert: fs.readFileSync('./localhost.crt'), // Chemin vers le certificat SSL
    },
    host : 'localhost',
    port : 5173,
  }
})
