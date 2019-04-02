/**
 * 操作路由
 * 
 */

export function path(state = '/', action) {
  switch (action.type) {
    case 'ROUTER_ACTION':
      return action.path
    default:
      return state
  }
}

export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}
