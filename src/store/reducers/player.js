/**
 * 播放器
 */

import ACTIONTYPE from '../action.types'

export function lock(state = false, action) {
    switch (action.type) {
        case ACTIONTYPE.updateLock:
            return action.payload
        default:
            return state
    }
}