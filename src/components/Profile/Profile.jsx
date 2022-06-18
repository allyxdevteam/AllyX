import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function Profile() {
    useEffect(() => {
        console.log( user );
        dispatch({
            type: 'FETCH_USER',
            payload: user.id
        });
    }, []);

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const allyApplicationStatus = () => {
        // ternary that checks for allyApplication.user_id
        // if true
        // switch statement dependent on ally application status
        // in the case of ally-application.is_complete && .is_approved
        // return "Thank you for being an Ally!"
        // case of .is_complete being true & .is_approved being false
        // return "Your Ally application is being reviewed, thanks for applying!"
        // case of .is_complete being false and .is_approved being false
        // return list of null values (?)
        // if false
        // return "Apply to become an Ally" link
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
            <Button>
                Update Profile
            </Button>
            {allyApplicationStatus()}
        </Box>
    )
}

export default Profile;