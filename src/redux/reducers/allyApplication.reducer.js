const allyApplicationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ALLY_APPLICATION':
            return action.payload;
        default:
            return state;
    }
}

export default allyApplicationReducer;