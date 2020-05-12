const path = require('path');

module.exports = {
  entry: './src/main-generated/javascript/index.js',
  node: {
    global: true,
    fs: "empty"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }}