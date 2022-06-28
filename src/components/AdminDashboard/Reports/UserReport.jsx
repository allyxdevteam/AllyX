import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback, useState } from "react";

import { DataGrid, GridToolbar, GridCellEditCommitParams } from "@mui/x-data-grid";
import {Box, Snackbar, Alert} from "@mui/material";

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
      editable: false,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 150,
      editable: false,
    },
    {
      field: "dob",
      headerName: "Birthday",
      type: "dateTime",
      width: 150,
      editable: false,
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
      editable: false,
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
      editable: false,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
      editable: false,
    },
    {
      field: "profile_pic",
      headerName: "Profile Pic Link",
      width: 150,
      editable: false,
    },
    {
      field: "verify_pic",
      headerName: "Verification Pic Link",
      width: 150,
      editable: false,
    },
    {
      field: "facebook_link",
      headerName: "Facebook Link",
      width: 150,
      editable: false,
    },
    {
      field: "twitter_link",
      headerName: "Twitter Link",
      width: 150,
      editable: false,
    },
    {
      field: "instagram_link",
      headerName: "Instagram Link",
      width: 150,
      editable: false,
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
    },
  ];

  // handles edits made to the DataGrid
  const processRowUpdate = (newValue, oldValue) =>{
    console.log('in process row update', newValue, oldValue)
    return newValue
  }

  const handleProcessRowUpdateError = (error) => {
    console.log('whoops!', error)
  }
 

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
