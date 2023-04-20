// Other module
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// Our module
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const commonConfig = require("./webpack.config");
const path = require("path");
// Dev config
const devConfig = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].mins.js", //.mins = remove all comments and white space
    assetModuleFilename: "images/[hash][ext][query]",
    // เริ่ม resolve จาก __dirname แล้วไปจอยที่ dist
  },
  // Loader
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  // Plugin
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/template/index.html" }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template/index.html",
        filename: "index.min.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
});
module.exports = devConfig;
