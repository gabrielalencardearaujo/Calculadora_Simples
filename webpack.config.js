const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './src/modules/index.ts',
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig.json',
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map'
};
