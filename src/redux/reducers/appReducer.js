const initialState = {
    loggedIn: false,
    user: null,
    tasks: [],
    taskActivities: [],
    taskDetails: null,
    myTasks: []
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

        case 'update_user':
            return {
                ...state,
                user: payload
            }

        case 'all_tasks':
            return {
                ...state,
                tasks: payload
            }

        case 'task_activity':
            return {
                ...state,
                taskActivities: payload
            }

        case 'task_details':
            return {
                ...state,
                taskDetails: payload
            }

        case 'created_task':
            return {
                ...state,
                myTasks: payload
            }

        default:
            return state
    }
}

export default appReducer