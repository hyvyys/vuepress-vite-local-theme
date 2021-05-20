const { path } = require('@vuepress/utils')

module.exports = {
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite bundler options
  }, 
  theme: path.resolve(__dirname, 'theme'),
}