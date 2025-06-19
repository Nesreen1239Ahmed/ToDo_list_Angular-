
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ToDo_list_Angular-/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ToDo_list_Angular-"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: '4a462a2340fb85dc4cd51e46124b662562a33eda8dac8668d9567e1e3e35c885', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'f93bba8b6b3d74fbdca89a555a6a63c4602fd2d3c2ba7a1f3c51564cd69d373a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5460, hash: '40b90235bdbcb07de1f48064ef789f38696b9a1e27d2cdad0ea4651382e53f60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
