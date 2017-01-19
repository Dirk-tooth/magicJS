module.exports = {
  entry: './main.js', // this is the path to your main JS file
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader?attrs=false',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  devtool: 'cheap-source-map',
  debug: true,
  output: {
    path: './bin', // path to where you want the built file
    publicPath: '/bin',
    filename: 'bundle.js', // name you want of built file
  },
};
