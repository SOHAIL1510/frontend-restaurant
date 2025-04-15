const { defineConfig } = require('@vue/cli-service')
const path = require('path');
// module.exports = defineConfig({
//   transpileDependencies: true
// });
module.exports = {
  outputDir: 'dist', // This specifies the 'dist' folder for the build output
}

module.exports = {
  outputDir: path.resolve(__dirname, '../backend/restaurant_management'),
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8001'
      }
    }
  }
}
