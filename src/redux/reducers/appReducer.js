const initialState = {
    loggedIn: false,
    user: null,
    tasks: []
}


const appReducer = (state=initialState, actions) => {
    const {type, payload} = actions

    switch(type) {
        case 'log_in':
            return {
                ...state,
                loggedIn: true,
                user: payload
            }

        case 'log_out':
            return {
                ...state,
                loggedIn: false,
                user: null
            }

        case 'all_tasks':
            return {
                ...state,
                tasks: payload
            }

        default:
            return state
    }
}

export default appReducer