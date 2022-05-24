const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/meravigliosi-automi/'
  : '',
  pwa: {
    name: 'Meravigliosi Automi',
    themeColor: '#822433',
    msTileColor: '#2a2e35',
    manifestOptions: {
      background_color: '#2a2e35'
    }
  }
})
