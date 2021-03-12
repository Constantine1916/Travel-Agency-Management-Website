/*
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 10:43:21
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-03-12 12:27:45
 * @FilePath     : \test\vue.config.js
 */
module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always'   // 此处指定为兼容 less-loader 3.x 的默认选项
        }
      }
    }
  }
}
