
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://naeemazizboa.github.io/activities/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://naeemazizboa.github.io/activities"
  }
],
  assets: {
    'index.csr.html': {size: 1563, hash: '123f05390265524ed76af0cf2019dd6a0f913817650af6ce2850dab94083ff46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1972, hash: '072c35fb82949dd31614b1e0da49e041287102f503409146199473e36a15a0da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11230, hash: 'dd8f0c5ae9a16c7c339a337076f8f1e1f3bd91e725d9d76e52770e70455fb08c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4MZRC2I4.css': {size: 50, hash: '8mvZ4jqSOjY', text: () => import('./assets-chunks/styles-4MZRC2I4_css.mjs').then(m => m.default)}
  },
};
