import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Profile() {
    const history = useHistory();
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
            {/* <AllyApplicationStatus /> */}
        </Box>
    )
}

export default Profile;