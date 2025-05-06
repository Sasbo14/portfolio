
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23604, hash: '8acfb9ac4f79d82c98936e8db03c753cbdbd1630a39885980eafb817a08ccd1e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17182, hash: 'd5c5f9a914171fa4799faec6eee2d712aa6a8cf241e9e96a3933a3a32fab08bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47665, hash: 'f4fa4f1df326992f1aed2b626ed15aafb4cbe89fd23fa198747f85ddfc7cdb5e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 47680, hash: '2a0278d13e1af2c8adaf9e3ee20a072f669f0134160a82d019b7bec5ad130989', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 47677, hash: '29101e64487c8faf232cde83a12532a9610ae38f363bf16b32815f7c14fda534', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
