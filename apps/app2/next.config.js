const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./Home": "./src/pages/app2Home",
        },
        shared: {},
        extraOptions:{

          exposePages: true
        }
      }),
    );

    return config;
  },
};
