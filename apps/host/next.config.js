const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    app1: `app1@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    app2: `app2@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',

        remotes: remotes(options.isServer),
        shared: {},
        extraOptions:{

          exposePages: true
        }
      }),
    );

    return config;
  },
};
