/**
 * 操作路由
 * 
 */

import ACTIONTYPE from '../action.types'

console.log(ACTIONTYPE)

export function path(state = '/', action) {
  switch (action.type) {
    case ACTIONTYPE.updateRouter:
      return action.path
    default:
      return state
  }
}

export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, ...[action.text]]
    default:
      return state;
  }
}
