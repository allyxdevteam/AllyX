import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function UserReport(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type: 'FETCH_PROFILES'});
    }, [])

    const users = useSelector(store=>store.users);

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
            type: 'dateTime',
            width: 150,
            editable: false,
          },
          {
            field: 'is_ally',
            headerName: 'Ally',
            type: 'boolean',
            width: 90,
            editable: false,
          },
          {
            field: 'is_admin',
            headerName: 'Admin',
            type: 'boolean',
            width: 90,
            editable: false,
          },
          {
            field: 'is_reported',
            headerName: 'Reported',
            type: 'boolean',
            width: 90,
            editable: false,
          },
          {
            field: 'is_active',
            headerName: 'Active',
            type: 'boolean',
            width: 90,
            editable: false,
          },
          {
            field: 'is_blocked',
            headerName: 'Blocked',
            type: 'boolean',
            width: 90,
            editable: false,
          },
          {
            field: 'delete_requested',
            headerName: 'Delete',
            type: 'boolean',
            width: 90,
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
            type: 'number',
            width: 80,
            editable: false,
          },
          {
            field: 'inserted_at',
            headerName: 'Sign-up Date',
            type: 'dateTime',
            width: 150,
            editable: false,
          }, 
    ];

    return(
        <Box sx={{ height: 600, width: '98%', margin: 'auto' }}>
        <Typography variant="p">Click a column to see options</Typography>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          density='compact'
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    )
}
export default UserReport;