const path = require('path');
module.exports = {
   entry: "./index.js",
   devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      port: 9000,
      clientLogLevel: "none",
      quiet: true
    },
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: "build.js"
    },
    mode: 'development' 
}