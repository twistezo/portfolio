// const webpack = require('webpack');

// module.exports = {
//   entry: [
//     './src/index.js'
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ['babel-loader', 'eslint-loader']
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.(gif|png|jpe?g|svg)$/i,
//         use: [
//           'file-loader',
//           {
//             loader: 'image-webpack-loader',
//             options: {
//               bypassOnDebug: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(html)$/,
//         use: {
//           loader: 'html-loader',
//           options: {
//             minimize: true
//           }
//         }
//       },
//       {
//         test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             outputPath: 'fonts/'
//           }
//         }]
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery',
//       'window.jQuery': 'jquery',
//       Popper: ['popper.js', 'default']
//     })
//   ],
//   devServer: {
//     contentBase: './dist',
//     hot: true
//   }
// };
