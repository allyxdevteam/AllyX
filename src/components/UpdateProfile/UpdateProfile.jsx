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

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const profile = useSelector(store => store.profile);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'UPDATE_PROFILE',
            payload: profile
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
                value={profile.first_name}
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
                value={profile.last_name}
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
                value={profile.phone_number}
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
                value={profile.email}
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
                value={profile.city}
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
                value={profile.facebook_link}
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
                value={profile.twitter_link}
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
                value={profile.instagram_link}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_INSTAGRAM_LINK',
                        payload: e.target.value
                    })
                }}
            >
            </TextField>
            <Button
                type="submit"
            >
                Submit
            </Button>
        </form>
    )
}

export default UpdateProfile;