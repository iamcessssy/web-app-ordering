const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Define the entry point for your application
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true, // To support client-side routing
    hot: true, // Enable hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Ensure Babel can handle React JSX
          },
        },
      },
      {
        test: /\.css$/, // Add a rule for CSS files
        use: ['style-loader', 'css-loader'], // Add loaders for CSS files
      },
      {
        test: /\.svg$/, // Add a rule for SVG files
        use: ['@svgr/webpack'], // Loader for SVGs as React components
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
      name: 'product_service',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList', // Path to the component being exposed
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
        'prop-types': { 
          singleton: true,
          eager: true, 
        },
        axios: { 
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
  target: 'web', // Ensure it targets the web platform
  devtool: 'source-map', // Useful for debugging
};