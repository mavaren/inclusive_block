const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'conteeent.js',
    path: path.resolve(__dirname, './')
  }
};
