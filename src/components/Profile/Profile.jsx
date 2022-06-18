import { useEffect } from 'react';

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
    
    return (
        <Box>
            {user.profile_pic ?
                <Avatar 
                    alt={user.username}
                    src={user.profile_pic}
                />
            :
                <AccountCircleIcon />
            }
            

        </Box>
    )
}

export default Profile;