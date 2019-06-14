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


// configureWebpack: {
//   devServer: {
//       proxy: {
//           //名字可以自定义，这里我用的是api
//           '/api': {
//             target: 'http://m.maoyan.com',//设置你调用的接口域名和端口号 别忘了加http
//             changeOrigin: true,//这里设置是否跨域
//             pathRewrite: {
//               '^/api': ''
//             }
//           }
//       }
//   }
// },




// module.exports = {

//   proxy: {
//         '/apis': {    //将www.exaple.com印射为/apis
//             target: 'https://www.exaple.com',  // 接口域名
//             secure: false,  // 如果是https接口，需要配置这个参数
//             changeOrigin: true,  //是否跨域
//             pathRewrite: {
//                 '^/apis': ''   //需要rewrite的,
//             }              
//         }
//   }
// }