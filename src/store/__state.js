/**
 * redux 初始化 state 数据
 */


 /**
  * 本地储存辅助函数，用于取出本地存储的数据
  * @param {字段} key 
  * @param {初始值} __initVal 
  * @param {数据类型} type {object/number/boolean/string}
  */

function mapSessionToState(key, __initVal, type = 'string') {
    var v = sessionStorage.getItem(key)
    if (!v) v = __initVal
    switch (type) {
        case 'object':
            return JSON.parse(v)
        case 'number':
            return v + 0
        case 'boolean':
            return v === 'true'
        default:
            return v
    }
}

export default {
    path: mapSessionToState('path', '/discover/found') //必须输入,防止重复定向
}