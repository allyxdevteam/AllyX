const allyAppReducer = (state = {answer_1: '',answer_2: '',answer_3: '',answer_4: '', is_complete: undefined,}, action) => {
    switch (action.type) {
        case 'SET_ALLY_APP':
            console.log(`In reducer SET_ALLY_APP`, action.payload)
            return action.payload;
        case `EDIT_ANSWER_1`:
            console.log(`IN EDIT_ALLY APP IN allyAppReducer`)
           return( {
                ...state,
                answer_1: action.payload
            })
        case `EDIT_ANSWER_2`:
                console.log(`IN EDIT_ALLY APP IN allyAppReducer`)
               return( {
                    ...state,
                    answer_2: action.payload
                })
        case `EDIT_ANSWER_3`:
            console.log(`IN EDIT_ALLY APP IN allyAppReducer`)
           return( {
                ...state,
                answer_3: action.payload
            })
            case `EDIT_ANSWER_4`:
                console.log(`IN EDIT_ALLY APP IN allyAppReducer`)
               return( {
                    ...state,
                    answer_4: action.payload
                })
        default:
            return state;
    }
}

export default allyAppReducer;