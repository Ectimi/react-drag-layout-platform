const CracoLessPlugin = require('craco-less');
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#2c59e7' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};