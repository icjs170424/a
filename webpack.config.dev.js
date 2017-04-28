import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false, // noisy, actual dev probably disable
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: { // in dev, no file is generated
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create dynamic HTML (including reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
