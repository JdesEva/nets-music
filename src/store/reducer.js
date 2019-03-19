const routerReducer = (state, action) => {
    if (!state) return {
        path: '/'
    }
    switch (action.type) {
        case 'ROUTER_ACTION':
            return { ...state, path: action.path }
        default:
            return state
    }
}

export default routerReducer