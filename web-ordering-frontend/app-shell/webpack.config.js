const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Define the entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Ensure the public path is correctly set
  },
  devServer: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Matches both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Ensure Babel can handle React JSX
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
    alias: {
      shared: path.resolve(__dirname, '../shared'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // Use path.resolve for cross-platform compatibility
    }),
    new ModuleFederationPlugin({
      name: 'app_shell',
      remotes: {
        product_service: 'product_service@http://localhost:3001/remoteEntry.js',
        cart_service: 'cart_service@http://localhost:3002/remoteEntry.js',
        checkout_service: 'checkout_service@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true, // Ensure only one instance of react is loaded
          eager: true, // Load shared modules eagerly to avoid issues
        },
        'react-dom': {
          singleton: true,
          eager: true,
        },
        axios: { 
          singleton: true,
          eager: true,
        },
        'prop-types': { 
          singleton: true,
          eager: true,
        },
        'zustand': { 
          singleton: true, 
          eager: true 
        }, // Ensure Zustand is shared
      },
    }),
  ],
  target: 'web', // Ensure it is targeting the web platform
  devtool: 'source-map', // Useful for debugging, can be adjusted based on needs
};
