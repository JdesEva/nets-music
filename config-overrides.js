/**
 * 去除生产环境的sourceMap
 */

const { override } = require('customize-cra')

process.env.GENERATE_SOURCEMAP = false //关键代码

module.exports = override()