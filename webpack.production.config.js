import webpack from 'webpack'
import base from './webpack.base.config'

base.devtool = 'cheap-module-source-map'
base.plugins = base.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    comments: false
  }),
  new webpack.optimize.DedupePlugin(),
  /* add this when webpack 2.2.* is released, it will optimise the bundle
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  */
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'production'"
    }
  })
])

module.exports = base
