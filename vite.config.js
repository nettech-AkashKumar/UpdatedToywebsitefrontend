
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

// ✅ Full list of Popper imports (modifiers, enums, popper-base)
const popperImports = [
  '@popperjs/core',
  '@popperjs/core/lib/enums',
  '@popperjs/core/lib/popper-base',
  '@popperjs/core/lib/modifiers/applyStyles',
  '@popperjs/core/lib/modifiers/arrow',
  '@popperjs/core/lib/modifiers/computeStyles',
  '@popperjs/core/lib/modifiers/eventListeners',
  '@popperjs/core/lib/modifiers/flip',
  '@popperjs/core/lib/modifiers/hide',
  '@popperjs/core/lib/modifiers/offset',
  '@popperjs/core/lib/modifiers/popperOffsets',
  '@popperjs/core/lib/modifiers/preventOverflow'
];

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
      'prop-types-extra',
      'prop-types-extra/lib/all',
      ...popperImports // ✅ include Popper imports
    ],
  },
  build: {
    rollupOptions: {
      external: [...popperImports], // ✅ externalize Popper imports
    },
  },
})


