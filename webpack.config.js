module.exports = {
  entry: {
    'rx-voter': './examples/rxjs/rx-voter.js',
  },
  output: {
    filename: './examples/rxjs/[name].compiled.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.js?$/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};