# nextjs-ts-lerna-mf
An example setup of nextjs apps with module federation and lerna.

# Bootstrap
1. run `yarn` from the repo root
2. start dev mode with `npx lerna run dev`, host app is on 3001 port
3. build with `npx lerna run build`

# Concepts
Main challenge is to build a mono-repo which handles multiple apps with the help of lerna and module federation. Routing is at the top level (host app) to have single routing that dynamically loads different app components.

# Current configuration
1. Host app is a nextjs 13 app in typescript which ... hosts the remote apps and creates a shared routing between them
2. App1 and App2 are remote apps

# Adding a new page
1. Just add a page in the remote app you like (app1 or app2)
2. Go to app relative nextjs.config and expose the app
3. Create a page in host app after declaring the relative module in `host/remoteTypes.d.ts` that dynamically loads the remote app page
