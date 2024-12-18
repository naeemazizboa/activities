
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/activities/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/activities"
  }
],
  assets: {
    'index.csr.html': {size: 1533, hash: '34aa38f9be2c8a2e1faf24bca3aee0889804bb6afede97d67885bb4b97196b2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1942, hash: '53f0a39ca69d2cae6cf162ee1477d03ecba704fcb387f3741a00572fd528ca3f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11200, hash: 'b805de4a3277cbcbe501c59a592de2625c281b41374e8304f1ea3b9c6efe8e1d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4MZRC2I4.css': {size: 50, hash: '8mvZ4jqSOjY', text: () => import('./assets-chunks/styles-4MZRC2I4_css.mjs').then(m => m.default)}
  },
};
