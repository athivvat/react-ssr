const path = require("path");
const nodeExternals = require("webpack-node-externals");

const common = {
  // Configure all the loaders that will be used to transform all the specified file types.
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
};

const clientConfig = {
  ...common,
  // Tells webpack to use its built-in optimizations.
  mode: "development",
  name: "client",
  target: "web",
  // The entry point of the bundle.
  entry: {
    client: ["./src/client.js"],
  },
  // Where the output files will be placed.
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  // Tell webpack to put all the vendors to the separate vendor.js file
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: (module) => /node_nodules/.test(module.resource),
          enforce: true,
        },
      },
    },
  },
  devtool: "cheap-module-source-map",
};

const serverConfig = {
  ...common,
  mode: "development",
  name: "server",
  target: "node",
  externals: [nodeExternals()],
  entry: {
    server: path.resolve(__dirname, "src", "server.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  devtool: "cheap-module-source-map",
};

module.exports = [clientConfig, serverConfig];
