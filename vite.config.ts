import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/global.scss";`, 
      },
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // creating a chunk to @open-ish deps. Reducing the vendor chunk size
          if (id.includes('gsap')) {
            return 'gsap';
          }
          if (id.includes('three/')) {
            return id.toString().split('three/')[1].split('/')[0].toString();
          }
          if (id.includes('three')) {
            return 'three';
          }
          if (id.includes('@splidejs')) {
            return '@splidejs';
          }
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          
        },
      },
    },
  },
})
