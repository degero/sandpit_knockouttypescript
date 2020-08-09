const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options: {
              configuration: {
                rules: {
                  quotemark: [true, "double"],
                },
              },

              // can specify a custom config file relative to current directory or with absolute path
              // 'tslint-custom.json'
              configFile: false,

              // tslint errors are displayed by default as warnings
              // set emitErrors to true to display them as errors
              emitErrors: false,

              // tslint does not interrupt the compilation by default
              // if you want any file with tslint errors to fail
              // set failOnHint to true
              failOnHint: true,

              // enables type checked rules like 'for-in-array'
              // uses tsconfig.json from current working directory
              typeCheck: false,

              // automatically fix linting errors
              fix: false,

              // can specify a custom tsconfig file relative to current directory or with absolute path
              // to be used with type checked rules
              tsConfigFile: "tsconfig.json",

              // name of your formatter (optional)
              // formatter: "yourformatter",

              // path to directory containing formatter (optional)
              formattersDirectory: "node_modules/tslint-loader/formatters/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
