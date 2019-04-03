/**
 * 修改react 配置
 */

const { override } = require('customize-cra')

process.env.GENERATE_SOURCEMAP = false //去除生产环境的soureMap

module.exports = override()