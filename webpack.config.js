const path = require("path");
const HtmlWebpackPlugIn = require("html-webpack-plugin");
const ExtractTextWebpack = require("extract-text-webpack-plugin");

const extractPlugIn = new ExtractTextWebpack({
  filename: "src/css/[name].css",
  allChunks: true
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugIn.extract({
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    extractPlugIn,
    new HtmlWebpackPlugIn({
      template: "src/index.html"
    })
  ]
};
