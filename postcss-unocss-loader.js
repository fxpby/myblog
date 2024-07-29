module.exports = function (context, options) {
  return {
    name: 'postcss-unocss-loader',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(
        // require('postcss-import'),
        require('unocss'),
        require('postcss-nested'),
        require('autoprefixer'),
      )
      return postcssOptions
    },
  }
}
