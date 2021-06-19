module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  config.module.rules.push([
    {
      test: /\.(png|woff2|ttf|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ]);
  return config;
};
