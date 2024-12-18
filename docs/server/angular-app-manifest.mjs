
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/activity_list/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/activity_list"
  }
],
  assets: {
    'index.csr.html': {size: 1536, hash: '1f728af9a2c3423ec1bd415a441e67bb3f9dad9f68ccb28dc9c5c5844f9fb06b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1945, hash: '4b4aa34e65810166355c38f2ea634afe7bdf9292e5cbd3b659ac41d313c4b072', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11203, hash: 'c00a51fe6310253e7d098f7bffb4599fb086f9140178930587133405088fe253', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4MZRC2I4.css': {size: 50, hash: '8mvZ4jqSOjY', text: () => import('./assets-chunks/styles-4MZRC2I4_css.mjs').then(m => m.default)}
  },
};
