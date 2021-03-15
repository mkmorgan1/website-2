const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }

}