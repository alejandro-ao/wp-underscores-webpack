const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    main: ["./src/ts/main.ts", "./src/scss/main.scss"],
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "[name].min.js",
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "./img/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = config;
