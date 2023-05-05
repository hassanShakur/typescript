const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/app.ts', // Entry point for the project
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Should be similar to the value in the outFile value
    publicPath: 'dist',
  },

  // Helps in debugging
  devtool: 'inline-source-map',

  // Instructions on what to do with the `.ts` files:
  module: {
    rules: [
      {
        test: /\.ts$/, // All files ending with .ts
        use: 'ts-loader', // What webpack is to do with those files - Hand over to ts-loader
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },
};
