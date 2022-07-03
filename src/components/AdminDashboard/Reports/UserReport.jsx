import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

function UserReport() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_PROFILES" });
  }, []);

  const users = useSelector((store) => store.users);
  

  // DataGrid config
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "username",
      headerName: "Username",
      width: 120,
      editable: false,
    },
    {
      field: "first_name",
      headerName: "First Name",
      width: 150,
      editable: true,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 150,
      editable: true,
    },
    {
      field: "dob",
      headerName: "Birthday",
      type: "dateTime",
      width: 150,
      editable: false,
      valueFormatter: (params) =>{
        if(params.value == null) {
          return('');
        }

        const formattedDate = dayjs(params.value).format('MM/DD/YYYY');
        return `${formattedDate}`;
      }
    },
    {
      field: "is_ally",
      headerName: "Ally",
      type: "boolean",
      width: 90,
      editable: true,
    },
    {
      field: "is_admin",
      headerName: "Admin",
      type: "boolean",
      width: 90,
      editable: true,
    },
    {
      field: "is_reported",
      headerName: "Reported",
      type: "boolean",
      width: 90,
      editable: true,
    },
    {
      field: "is_active",
      headerName: "Active",
      type: "boolean",
      width: 90,
      editable: true,
    },
    {
      field: "is_blocked",
      headerName: "Blocked",
      type: "boolean",
      width: 90,
      editable: true,
    },
    {
      field: "delete_requested",
      headerName: "Delete",
      type: "boolean",
      width: 90,
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
      editable: true,
    },
    {
      field: "profile_pic",
      headerName: "Profile Pic Link",
      width: 150,
      editable: true,
    },
    {
      field: "verify_pic",
      headerName: "Verification Pic Link",
      width: 150,
      editable: true,
    },
    {
      field: "facebook_link",
      headerName: "Facebook Link",
      width: 150,
      editable: true,
    },
    {
      field: "twitter_link",
      headerName: "Twitter Link",
      width: 150,
      editable: true,
    },
    {
      field: "instagram_link",
      headerName: "Instagram Link",
      width: 150,
      editable: true,
    },
    {
      field: "average_stars",
      headerName: "Rating",
      type: "number",
      width: 80,
      editable: false,
    },
    {
      field: "inserted_at",
      headerName: "Sign-up Date",
      type: "dateTime",
      width: 150,
      editable: false,
      valueFormatter: (params) =>{
        if(params.value == null) {
          return('');
        }

        const formattedDate = dayjs(params.value).format('MM/DD/YY, hh:mm A');
        return `${formattedDate}`;
      }
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            color="inherit"
            onClick={handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];

  // handles edits made to the DataGrid
  const processRowUpdate = (newValue, oldValue) => {
    console.log("in process row update", newValue, oldValue);
    dispatch({ type: "UPDATE_PROFILE_ADMIN", payload: newValue });
    return newValue;
  };

  const handleProcessRowUpdateError = (error) => {
    console.log("whoops!", error);
  };

  // contains a layer of abstraction else this function will execute on render (MUI's choice not mine)
  const handleDeleteClick = (id) => () => {
    Swal.fire({
        title: "Are you sure you want to delete this user?",
        text: "Once deleted, you will not be able to recover their data!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete'
      })
      .then((willDelete) => {
        if (willDelete) {
            dispatch({
                type: 'DELETE_PROFILE',
                payload: id
            })
          Swal.fire("The user has been deleted", {
            icon: "success",
          });
        } else {
          Swal.fire("Cancelled! The user data is safe.");
        }
      });
  };

  return (
    <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        density="compact"
        rowsPerPageOptions={[10]}
        components={{ Toolbar: GridToolbar }}
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        getRowId={(row) => row.id}
      />
    </Box>
  );
}
export default UserReport;
