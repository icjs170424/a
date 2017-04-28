import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map', // slower than dev
  noInfo: false, // noisy, actual dev probably disable
  entry: {
     vendor: path.resolve(__dirname, 'src/vendor'),
     main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: { // in dev, no file is generated
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js' 
      // names defined in the entry object above 
      // hash calculated by WebpackMd5Hash
  },
  plugins: [
    // pull out css
    new ExtractTextPlugin('[name].[contenthash].css'),

    // content index filenames for cache-busting
    new WebpackMd5Hash(),

    // split bundle so vendor libraries are separate
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // must match bundle/"chunk" name above, or fails silently
    }),

    // Create dynamic HTML (including reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
         removeComments: true,
         collapseWhitespace: true,
         removeRedundantAttributes: true,
         useShortDoctype: true,
         removeEmptyAttributes: true,
         removeStyleLinkTypeAttributes: true,
         keepClosingSlash: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true
      },
      inject: true,
      // properties are available throught htmlWebpackPlugin.options.varName
      trackJSToken: '10a247cd21394f23a579904b123075df'
    }),

    // Eliminate duplicate packages
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
