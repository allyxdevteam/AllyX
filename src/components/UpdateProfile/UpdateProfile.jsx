import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function UpdateProfile() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE',
            payload: user.id
        })
    }, [])

    const history = useHistory('');
    const dispatch = useDispatch('');
    const user = useSelector(store => store.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'UPDATE_PROFILE',
            payload: user
        })
        history.push('/profile');
    }
    
    return (
        <form
            id="edit-item-form"
            onSubmit={handleSubmit}
        >
            <TextField
                label="first name"
                value={user.first_name}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_FIRST_NAME',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <TextField
                label="last name"
                value={user.last_name}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_LAST_NAME',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <TextField
                label="phone number"
                value={user.phone_number}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_PHONE_NUMBER',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <TextField
                label="email"
                value={user.email}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_EMAIL',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <TextField
                label="city"
                value={user.city}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_CITY',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <TextField
                label="facebook link"
                value={user.facebook_link}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_FACEBOOK_LINK',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <TextField
                label="twitter link"
                value={user.twitter_link}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_TWITTER_LINK',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <TextField
                label="instagram link"
                value={user.instagram_link}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_INSTAGRAM_LINK',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <Button>Submit</Button>
        </form>
    )
}

export default UpdateProfile;