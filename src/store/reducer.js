/**
 * 组合reducer
 */

import * as routerPatch from './reducers/routerPatch'

import * as player from './reducers/player'

import { combineReducers } from 'redux'

console.log(routerPatch)


export default combineReducers({
    ...routerPatch,
    ...player
})