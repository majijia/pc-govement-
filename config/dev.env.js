'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//写一些全局固定的东西
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_TITLE:'"政府端"',
  VUE_APP_ADMIN_HEADER:'"政府端"',
  VUE_APP_PREFIX:'"/doctorwebapi"',
  VUE_APP_IMG_PREFIX:'"https://ydjk-dev.oss-cn-beijing.aliyuncs.com/"'
})
