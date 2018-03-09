// const webpack = require('webpack');

module.exports = {
   entry: __dirname+'/main.jsx',

   output: {
      path:__dirname+'/',
      filename: 'bundle.js',
   },
   devtool: "source-map", // cheap-source-map will not work with UglifyJsPlugin
   devServer: {
      inline: true,
      port: 3000
    },

   module: {
      loaders: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules\/(?!react-voice-components)/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-2', 'stage-1']
            }
         },
         {
           test: /\.css$/,
           loader: 'style-loader!css-loader',
         },
         {
           test: /\.(jpe?g|gif|png)$/,
           loader: "file-loader?emitFile=false&name=../assets/Images/[name].[ext]"
         },
         {
           test: /\.html$/,
           loader: "file?name=[name].[ext]",
         },
         // {
         //   test: /\.(js|jsx)$/,
         //   exclude: /node_modules/,
         //   use: ['babel-loader','eslint-loader']
         // }
      ]
   },
 //   plugins: [
 //   new webpack.optimize.UglifyJsPlugin({
 //     sourceMap: true,   // enable source maps to map errors (stack traces) to modules
 //     output: {
 //       comments: false, // remove all comments
 //     },
 //   }),
 // ]
}
