
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



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// export default defineConfig({
//   plugins: [tailwindcss(), react()],
//   resolve: {
//     extensions: ['.jsx', '.json'],
//     alias: {
//       'react-smooth': path.resolve(__dirname, './react-smooth-fix.js'),
//        // NEW FIX for build failure due to missing module in react-bootstrap
//       'prop-types-extra/lib/all': path.resolve(__dirname, './src/shims/prop-types-extra.js'),
//     },
//   },
//   optimizeDeps: {
//     include: [
//       "recharts",
//       '@popperjs/core/lib/modifiers/arrow',
//     ],
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
    include: [
      'recharts',
      '@popperjs/core',
      '@popperjs/core/lib/modifiers/arrow',
      '@popperjs/core/lib/modifiers/computeStyles', //  Added this too
    ],
  },
  build: {
    rollupOptions: {
      external: [
        '@popperjs/core/lib/modifiers/arrow',
        '@popperjs/core/lib/modifiers/computeStyles', // Externalize it too
      ],
    },
  },
})
