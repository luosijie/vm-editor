var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/components/vm-editor.vue',
  output: {
    path: path.resolve(__dirname, './publish'),
    // publicPath: '/dist/',
    filename: 'vm_editor.min.js',
    library: 'vm-editor',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: './images/[name].[ext]?[hash]'
        }
      }
    ]
  }
}
