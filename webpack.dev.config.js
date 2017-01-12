import webpack from 'webpack'
import base from './webpack.base.config'

base.devtool = 'source-map'
base.entry = [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
].concat(base.entry)

base.plugins = base.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'development'"
    }
  })
])

module.exports = base
