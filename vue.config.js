const path = require("path")
// vue.config.js
module.exports = {
  // 选项...
  chainWebpack: config =>{
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module.rule('svg-sprite-loader').test(/\.svg$/)
    .include.add(path.resolve('src/assets/svg'))
    .end().use('svg-sprite-loader').loader('svg-sprite-loader').options({symbolId: 'icon-[name]'})
  }
}

