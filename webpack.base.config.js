import path from 'path'
import webpack from 'webpack'

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    './src/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: ['./node_modules'],
  },
  module: {
    loaders: [
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: APP_DIR,
      exclude: [ /\.spec\.js/ ]
    }]
  }
}
