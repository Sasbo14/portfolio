
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
    'index.csr.html': {size: 23604, hash: '752d4c111be9d91ec444e6c15be0dcb975aaab1f4dde5180e412a44c19dd1d6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17182, hash: 'aa6f56661a3e41ecadb8ab2e6f1f86bda6cc794786230426052d8d26d554989d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 47638, hash: '4055c3dd50a86b127eb5196ddea3bbc322d49f8db5b3d61046a3fa6ee1c3e1b3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 47638, hash: '4055c3dd50a86b127eb5196ddea3bbc322d49f8db5b3d61046a3fa6ee1c3e1b3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 47638, hash: '4055c3dd50a86b127eb5196ddea3bbc322d49f8db5b3d61046a3fa6ee1c3e1b3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
