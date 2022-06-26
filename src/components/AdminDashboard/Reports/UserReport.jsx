import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

function UserReport(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type: 'FETCH_PROFILES'});
    }, [])

    const users = useSelector(store=>store.users);
    console.log('the users yo', users);

        // DataGrid config
    const columns = [
        {field: 'id', headerName: 'ID', width: 40},
        {
            field: 'username',
            headerName: 'Username',
            width: 120,
            editable: false,
          },
          {
            field: 'first_name',
            headerName: 'First Name',
            width: 150,
            editable: false,
          },
          {
            field: 'last_name',
            headerName: 'Last Name',
            width: 150,
            editable: false,
          },
          {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: false,
          },
          {
            field: 'phone_number',
            headerName: 'Phone Number',
            width: 150,
            editable: false,
          },
          {
            field: 'dob',
            headerName: 'Birthday',
            width: 150,
            editable: false,
          },
          {
            field: 'city',
            headerName: 'City',
            width: 150,
            editable: false,
          },
          {
            field: 'profile_pic',
            headerName: 'Profile Pic Link',
            width: 150,
            editable: false,
          },
          {
            field: 'verify_pic',
            headerName: 'Verification Pic Link',
            width: 150,
            editable: false,
          },
          {
            field: 'facebook_link',
            headerName: 'Facebook Link',
            width: 150,
            editable: false,
          },
          {
            field: 'twitter_link',
            headerName: 'Twitter Link',
            width: 150,
            editable: false,
          },
          {
            field: 'instagram_link',
            headerName: 'Instagram Link',
            width: 150,
            editable: false,
          },
          {
            field: 'average_stars',
            headerName: 'Rating',
            width: 150,
            editable: false,
          },
          {
            field: 'inserted_at',
            headerName: 'Sign-up Date',
            width: 150,
            editable: false,
          },
          {
            field: 'is_ally',
            headerName: 'Ally',
            width: 90,
            editable: false,
          },
          {
            field: 'is_admin',
            headerName: 'Admin',
            width: 90,
            editable: false,
          },
          {
            field: 'is_reported',
            headerName: 'Reported',
            width: 90,
            editable: false,
          },
          {
            field: 'is_active',
            headerName: 'Active',
            width: 90,
            editable: false,
          },
          {
            field: 'is_blocked',
            headerName: 'Blocked',
            width: 90,
            editable: false,
          },
          {
            field: 'delete_requested',
            headerName: 'Delete',
            width: 90,
            editable: false,
          },
    ];

    return(
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    )
}
export default UserReport;