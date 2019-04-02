//重要说明


redux reducer 进行模块化之后, state 里面的 key 默认为 reducer 函数的函数名

例如


export function path(state, action) {
  if (!state) return { path: '/' }
  switch (action.type) {
    case 'ROUTER_ACTION':
      return action.path
    default:
      return state
  }
}



这个 reducer 进行 combineReducers 操作之后,在react组件中调用

connect(mapStateToProps)(component) 进行store 的 state 映射时,

获取 上面的 reducer 结果 写法为 state.path   ------>  即把函数名作为映射的键名,将函数的输出结果作为键值