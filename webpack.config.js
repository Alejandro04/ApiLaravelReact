module.exports = {
  entry: './front/index.jsx',
  output: {
    path: './public/',
    filename: "build.js",
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
