import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DisableAccount from '../DisableAccount/DisableAccount';
import AllyApplicationStatus from '../AllyApplicationStatus/AllyApplicationStatus';
import ImageUploader from './ImageUploader/ImageUploader';

import dayjs from 'dayjs';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import {Box, Button, Typography} from '@mui/material';

import swal from 'sweetalert';

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
    const formattedDate = dayjs(user.dob).format('MM/DD/YYYY');

    return (
        <Box display='flex' flexDirection='column' textAlign='center' justifyItems='center' sx={[{ maxWidth: '35vw' }, { pb: '10%' }, { m: 'auto' }]}>
            {user.is_admin === true ?
                <Typography>ADMIN</Typography>
                :
                <></>
            }
            {user.profile_pic ?
                <Avatar sx={{m:'auto'}}
                    alt={user.username}
                    src={user.profile_pic}
                />
                :
                <AccountCircleIcon sx={{m:'auto'}} />

            }

            <Typography sx={{m:2}} variant='h4' >{user.first_name}</Typography>
            <Typography sx={{m:2}}>{user.last_name}</Typography>
            <Typography sx={{m:2}}>{user.username}</Typography>
            <Typography sx={{m:2}}>{user.average_stars}</Typography>
            <Typography sx={{m:2}}>{user.phone_number}</Typography>
            <Typography sx={{m:2}}>{user.email}</Typography>
            <Typography sx={{m:2}}>Birthday: {formattedDate}</Typography>
            <Button variant = 'outlined' sx={{m:2}}
                onClick={() => {
                    history.push(`/profile/${user.id}`)
                }}
            >
                Update Profile
            </Button>

            <br />
            <AllyApplicationStatus />
            <br />
            <DisableAccount />
            <Button color='warning' variant='contained' sx={{m:2}}
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
                Request Delete
            </Button>
            

        </Box>
    )
}

export default Profile;