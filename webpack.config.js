const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'content.js',
    path: path.resolve(__dirname, './')
  }
};
