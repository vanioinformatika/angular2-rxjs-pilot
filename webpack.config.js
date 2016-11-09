"use strict"
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let path = require('path')

let plugins = [

  new webpack.optimize.CommonsChunkPlugin({
    name: ['app', 'vendor', 'polyfills'],
    minChunks: Infinity
  }),

  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),

  new ExtractTextPlugin(
    'css/[name].css'
  ),

  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
  })
]

module.exports = {
  entry: {
    'polyfills': path.join(__dirname, 'src/polyfills.ts'),
    'vendor': path.join(__dirname, 'src/vendor.ts'),
    'app': path.join(__dirname, 'src/main.ts')
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    inline: true, // server code can be altered in runtime
    port: 3000,
    stats: { colors: true },
    hot: true,
    progress: true
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js', '.css', '.scss', '.jpg', '.png'/*, '.html'*/]
  },

  module: {

    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [ path.join(__dirname, ('node_modules')) ]
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules(\/|\\)rxjs/
      }
    ],

    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [ path.join(__dirname, ('node_modules')) ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=img/[name].[ext]'
      },
      /*{
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap'])
      },*/
      /*{ test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader', 'resolve-url']
      },*/
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap'])
      }
    ],

    noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles', 'typings') ]
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, 'src/assets/scss')],
    sourceComments: true,
    outputStyle: 'compact'
  },

  plugins: plugins
}
