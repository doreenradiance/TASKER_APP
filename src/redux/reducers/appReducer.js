const initialState = {
    loggedIn: false,
    user: null
}


const appReducer = (state=initialState, actions) => {
    const {type, payload} = actions

    switch(type) {


        default:
            return state
    }
}

export default appReducer