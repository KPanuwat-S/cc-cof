module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/vendor.js" },
  // entry คือจุดที่จะเริ่ม bundle code

  // Loader
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
