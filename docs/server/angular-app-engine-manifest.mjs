
export default {
  basePath: '/activities/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
