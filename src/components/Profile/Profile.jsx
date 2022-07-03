import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DisableAccount from '../DisableAccount/DisableAccount';
import AllyApplicationStatus from '../AllyApplicationStatus/AllyApplicationStatus';
import ImageUploader from './ImageUploader/ImageUploader';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import swal from 'sweetalert';

function Profile() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_ALLY_APPLICATION',
            payload: user.id
        })
    }, [])

    const profileImage = useSelector((store) => store.profileImage)


    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    return (
        <Box sx={[{ maxWidth: '35vw' }, { m: 'auto' }]}>
            {user.is_admin === true ?
                <h3>ADMIN</h3>
                :
                <></>
            }
            {profileImage ?
                <Avatar
                    alt={user.username}
                    src={profileImage}
                />
                :
                <AccountCircleIcon />

            }

            <h6>{user.first_name}</h6>
            <h6>{user.last_name}</h6>
            <h6>{user.username}</h6>
            <h6>{user.average_stars}</h6>
            <h6>{user.phone_number}</h6>
            <h6>{user.email}</h6>
            <h6>{user.dob}</h6>
            <Button
                onClick={() => {
                    history.push(`/profile/${user.id}`)
                }}
            >
                Update Profile
            </Button>

            <br />
            <Button
                onClick={() => {
                    swal({
                        title: "Are you sure?",
                        text: "You cannot recover your account, once deleted.",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true
                    })
                        .then((deleteRequested) => {
                            if (deleteRequested) {
                                swal({
                                    text: "You have requested your account be deleted. A member of admin will be in contact.",
                                    icon: "success"
                                });
                                dispatch({
                                    type: 'REQUEST_DELETE',
                                    payload: user.id
                                })
                            }
                        }
                        )
                }}
            >
                Request Delete?
            </Button>
            <AllyApplicationStatus />
            <br />
            <DisableAccount />

        </Box>
    )
}

export default Profile;