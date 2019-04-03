/**
 * 组装redux store
 */

import { createStore, applyMiddleware } from 'redux'

import __state from './__state'

import reducer from './reducer'

import logger from './middleware/logger'

export default createStore(reducer, __state, applyMiddleware(logger))