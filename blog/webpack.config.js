module.exports = {
  entry: './front/form.jsx',
  output: {
    path: './public/components',
    filename: "form.js",
  },
  entry: './front/index.jsx',
  output: {
    path: './public/components',
    filename: "lista.js",
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
