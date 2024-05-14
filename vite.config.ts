import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base:"/crush/",
  plugins: [vue()],
  resolve:{
    alias:{
      "@":"/src"
    }
  },
  server:{
    host:true,
    port:7545
  },
  build:{
    outDir:"docs"
  }
})
