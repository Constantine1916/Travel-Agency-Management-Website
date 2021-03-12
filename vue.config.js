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
