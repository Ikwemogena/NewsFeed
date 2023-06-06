const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'index.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/script.js',
    //  print: './src/print.js',
   },
   devtool: 'inline-source-map',
//   devServer: {
//     // static: './dist',
//     static: path.resolve(__dirname, 'dist'), // Path to your output directory
//     publicPath: '/', // Root path for serving files
//     port: 8080, // Port number to run the server on
//   },


    devServer: {
        static: {
        directory: path.resolve(__dirname, 'dist'), // Path to your output directory
        },
        port: 8080, // Port number to run the server on
    },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Restaurant',
       template: 'src/index.html',
       inject: 'body'
     }),
     new Dotenv()
    //  new CopyWebpackPlugin({
    //     patterns: [
    //       { from: 'src/index.html', to: 'dist/index.html' },
    //     ],
    //   }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
 };