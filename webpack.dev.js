// Other module
const { merge } = require("webpack-merge");

// Our module
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const commonConfig = require("./webpack.config");
const path = require("path");
// Dev config
const devConfig = merge(commonConfig, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    assetModuleFilename: "images/[hash][ext][query]",
    // เริ่ม resolve จาก __dirname แล้วไปจอยที่ dist
  },
  // Loader
  module: {
    rules: [
      { test: /\.s?css$/i, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  // Plugin
  plugins: [new HtmlWebpackPlugin({ template: "./src/template/index.html" })],
});
module.exports = devConfig;
