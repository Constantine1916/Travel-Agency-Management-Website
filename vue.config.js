/*
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 10:43:21
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-12 14:35:17
 * @FilePath     : \travel-agency-management-website\vue.config.js
 */
module.exports = {
  devServer: {
    hot: true // 保存代码后，页面自动刷新
  },
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
