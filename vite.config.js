
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     tailwindcss(),react()
//   ],
//   resolve: {
//     extensions: ['.jsx', '.json']
//   }, 
//    optimizeDeps: {
//     include: ['recharts', 'react-smooth'],
//   },
  
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    extensions: ['.jsx', '.json'],
    alias: {
      'react-smooth': path.resolve(__dirname, './react-smooth-fix.js'),
    },
  },
  optimizeDeps: {
    include: ["recharts"],
  },
})
