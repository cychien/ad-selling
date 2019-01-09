const path = require('path')
const srcPath = path.resolve(__dirname, '../src')

module.exports = {
  extensions: ['*', '.js', '.jsx', '.json'],
  modules: [
    srcPath,
    path.resolve(__dirname, '../node_modules')
  ],
  alias: {
    fontAwesome: '@fortawesome/fontawesome-free/js/all.js',
    reactToastify: 'react-toastify/dist/ReactToastify.css',
    appCSS: path.resolve(srcPath, 'lib/app.css')
  }
}
