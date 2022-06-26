import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DisableAccount from '../DisableAccount/DisableAccount';
import AllyApplicationStatus from '../AllyApplicationStatus/AllyApplicationStatus';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Profile() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_ALLY_APPLICATION',
            payload: user.id
        })
    }, [])

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
            {user.user_pic ?
                <Avatar 
                    alt={user.username}
                    src={user.user_pic}
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
            <AllyApplicationStatus />
            <br />
            <DisableAccount />

        </Box>
    )
}

export default Profile;