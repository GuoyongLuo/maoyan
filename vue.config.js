module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/maoyan': {
          target: 'http://m.maoyan.com',
          secure: false,  // 如果是https接口，需要配置这个参数
          changeOrigin: true,  //是否跨域
          pathRewrite: {
            '^/maoyan': ''
          }
        }
      }
    }
  }
}
