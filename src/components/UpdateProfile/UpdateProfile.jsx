import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField, Box, Card, Typography } from '@mui/material';
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
            payload: {profile, profileImage}
        })
        history.push('/profile');
    }

    return (
        <Box sx={[{ maxWidth: '50vw' }, { m: 'auto' }, { mb: '25%' }]} display='flex' flexDirection={'column'} gap={'20px'}>
            {profileImage ?
                <Card sx={[{ maxWidth: '40vw' }, { m: 'auto' }]}>
                    <img src={profileImage}/>
                </Card>
                :
            user.profile_pic ?
                <Card sx={[{ maxWidth: '40vw' }, { m: 'auto' }]}>
                    <img src={user.profile_pic}/>
                </Card>
                :
                <Card sx={[{ maxWidth: '40vw' }, { m: 'auto' }]}>
                <AccountCircleIcon />
            </Card>
            }
            <Typography>Change/Add profile pic:</Typography>
            <Box display={'flex'}>
            <Button
                fullWidth="50%"
                component="label"
                variant='outlined'
            >
                1: Choose file to upload
                <input
                    type="file"
                    hidden
                    onChange={(event) => { setImageSelected(event.target.files[0]) }}
                />
            </Button>
            <Button fullWidth='50%' variant="contained" onClick={uploadImage}>2: upload file</Button>
            </Box>
            <Typography>Change/Add profile info:</Typography>

            <TextField
                label="first name"
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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