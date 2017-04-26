import path from 'path';

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
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
