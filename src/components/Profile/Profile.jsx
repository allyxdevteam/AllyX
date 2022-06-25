import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Profile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

function Profile() {
    // useEffect(() => {
    //     console.log( user );
    //     dispatch({
    //         type: 'FETCH_USER',
    //         payload: user.id
    //     });
    // }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    return (
        <Box>
            {user.is_admin === true ?
                <h3>ADMIN</h3>
            :
                <></>
            }
            {user.profile_pic ?
                <Avatar 
                    alt={user.username}
                    src={user.profile_pic}
                />
            :
                <AccountCircleIcon />
            }
            <h6>{user.username}</h6>
            <h6>{user.average_stars}</h6>
            <h6>{user.phone_number}</h6>
            <h6>{user.email}</h6>
            <h6>{user.DOB}</h6>
            <Button
                onClick={() => {
                    history.push(`/profile/${user.id}`)
                }}
            >
                Update Profile
            </Button>
            {/* <AllyApplicationStatus /> */}
            <br />
            <h6 id="disable-account">Disable account?</h6>
            <Switch 
                onClick={() => {
                    dispatch({
                        type: 'DISABLE_ACCOUNT',
                        payload: user.id
                    });
                }}
            />
        </Box>
    )
}

export default Profile;