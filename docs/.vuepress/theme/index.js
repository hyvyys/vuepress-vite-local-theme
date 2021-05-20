const { path } = require('@vuepress/utils');

exports.default = {
  name: 'vuepress-theme-aj',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue'),
  },
}