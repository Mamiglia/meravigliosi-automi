const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPathx: process.env.NODE_ENV === 'production'
  ? '/meravigliosi-automi/'
  : ''
})
