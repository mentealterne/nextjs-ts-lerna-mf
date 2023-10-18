/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app1',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./Home": "./src/pages/app1Home",
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
