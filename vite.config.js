import vue from '@vitejs/plugin-vue';

const { defineConfig } = require('vite');
const path = require('path');

// https://vitejs.dev/config/
module.exports =  defineConfig({
  build: {
    lib:{
      entry: path.resolve(__dirname, 'src/index.js'),
      name: "typewriter",
      fileName: (format) => `typewriter.${format}.js`
    },
    rollupOptions: {
      external:["vue"],
      output: {
        globals: {
          vue: 'Vue'
        },
      },
    },
  },
  plugins: [vue()]
})
