import UnoCSS from '@unocss/postcss'
module.exports = function (context, options) {
  return {
    name: 'postcss-unocss-loader',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(
        // require('postcss-import'),
        UnoCSS(),
        require('postcss-nested'),
        require('autoprefixer'),
      )
      return postcssOptions
    },
  }
}
