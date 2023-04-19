const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // entry คือจุดที่จะเริ่ม bundle code
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
    // เริ่ม resolve จาก __dirname แล้วไปจอยที่ dist
  },
  // Loader
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      { test: /\.s?css$/i, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },

  // Plugin
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/template/index.html" }),
  ],
};
