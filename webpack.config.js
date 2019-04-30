const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/Index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /.test.(js|jsx)$/],
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
