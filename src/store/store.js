import { createStore } from 'redux'

import reducer from './reducer'

const initState = {
    path: '/found'
}

const store = createStore(reducer, initState)

export default store