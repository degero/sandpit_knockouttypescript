module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],

    files: [{ pattern: "src/**/*.+(js|ts)" }],
    webpack: {
      resolve: {
        extensions: [".js", ".ts", ".html"],
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
        ],
      },
      stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true,
      },
      devtool: "inline-source-map",
    },
    preprocessors: {
      "src/**/*.ts": ["webpack"],
      "src/**/*.js": ["webpack"],
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    concurrency: Infinity,
  });
};
