const profileReducer = (state = {}, action) => {
    if (action.type === 'SET_USER') {
        return action.payload;
    } else if (action.type === 'EDIT_FIRST_NAME') {
        return (
            {
                ...state,
                first_name: action.payload
            }
        )
    } else if (action.type === 'EDIT_LAST_NAME') {
        return (
            {
                ...state,
                last_name: action.payload
            }
        )
    } else if (action.type === 'EDIT_PHONE_NUMBER') {
        return (
            {
                ...state,
                phone_number: action.payload
            }
        )
    } else if (action.type === 'EDIT_EMAIL') {
        return (
            {
                ...state,
                email: action.payload
            }
        )
    } else if (action.type === 'EDIT_CITY') {
        return (
            {
                ...state,
                city: action.payload
            }
        )
    } else if (action.type === 'EDIT_FACEBOOK_LINK') {
        return (
            {
                ...state,
                facebook_link: action.payload
            }
        )
    } else if (action.type === 'EDIT_TWITTER_LINK') {
        return (
            {
                ...state,
                twitter_link: action.payload
            }
        )
    } else if (action.type === 'EDIT_INSTAGRAM_LINK') {
        return (
            {
                ...state,
                instagram_link: action.payload
            }
        )
    }
    return state 
}

export default profileReducer;