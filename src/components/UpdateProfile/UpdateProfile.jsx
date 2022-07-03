import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';

import ImageUploader from '../Profile/ImageUploader/ImageUploader';

function UpdateProfile() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE',
            payload: user.id
        })
    }, [])

    const profileImage = useSelector((store) => store.profileImage)


    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const profile = useSelector(store => store.profile);

    const [imageSelected, setImageSelected] = useState('');

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "lpv0o9ul")
        dispatch({
            type: 'POST_IMAGE',
            payload: formData
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'UPDATE_PROFILE',
            payload: profile
        })
        history.push('/profile');
    }

    return (
        <Box sx={[{ maxWidth: '45vw' }, { m: 'auto' }, { mb: '25%' }]} display='flex' flexDirection={'column'} gap={'20px'}>
            {profileImage ?
                <Avatar
                    alt={user.username}
                    src={profileImage}
                />
                :
                <AccountCircleIcon />

            }
            <Button
                component="label"
            >
                Choose new pic
                <input
                    type="file"
                    hidden
                    onChange={(event) => { setImageSelected(event.target.files[0]) }}
                />
            </Button>
            {/* <Input type="file" onChange={(event) => { setImageSelected(event.target.files[0]); }} /> */}
            <Button variant="contained" onClick={uploadImage}>upload image</Button>
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
                mt={10}
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
                onClick={handleSubmit}
            >
                Save Profile
            </Button>
        </Box>
    )
}

export default UpdateProfile;