import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Profile() {
    useEffect(() => {
        console.log( user );
        dispatch({
            type: 'FETCH_USER',
            payload: user.id
        });
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const allyApplication = useSelector(store => store.allyApplication)

    const allyApplicationStatus = () => {
        if (allyApplication.id === undefined) {
            return (
                <h3
                onClick={() => {
                    history.push('/allyApplication')
                }}
                >
                    Apply to become an Ally
                </h3>
            )
        } else if (allyApplication.is_complete === true && allyApplication.is_approved === true) {
            return <h3>Thank you for being an Ally!</h3>
        } else if (allyApplication.is_complete === true && allyApplication.is_approved === false) {
            return <h3>Your Ally application is being reviewed, thanks for applying!</h3>
        } else if (allyApplication.is_complete === false && allyApplication.is_approved === false) {
            return (
                <h3
                onClick={() => {
                    history.push('/allyApplication')
                }}
                >
                    Your application requires attention.
                </h3>
            )
        }
    }


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
            {allyApplicationStatus()}
        </Box>
    )
}

export default Profile;