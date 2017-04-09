module.exports = {
  entry: './front/routes/routes.jsx',
  output: {
    path: './public/',
    filename: "route.js",
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
