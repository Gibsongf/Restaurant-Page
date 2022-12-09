const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    /* index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    elementGenerator: {
      import: './src/elements-generator.js',
      dependOn: 'shared',
    },
    homepage: {
      import: './src/home-page.js',
      dependOn: 'shared',
    }, */
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    /* clean: true, */
  },

  devtool: 'inline-source-map',
    module: {
        rules: 
        [
          {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"]
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
          },
      
        ],
    },
}