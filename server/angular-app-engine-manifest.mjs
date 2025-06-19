
export default {
  basePath: '/ToDo_list_Angular-',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
