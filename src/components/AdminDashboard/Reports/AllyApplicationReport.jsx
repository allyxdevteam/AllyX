import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function AllyApplicationReport() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_ALLY_APPLICATIONS" });
  }, []);

  const allyApplications = useSelector((store) => store.allyApplications);

  // DataGrid config
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "user_id",
      headerName: "User ID",
      width: 90,
      editable: false,
    },
    {
        field: "username",
        headerName: "Username",
        width: 150,
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
        field: "city",
        headerName: "City",
        width: 150,
        editable: false,
      },
      {
        field: "dob",
        headerName: "Birthday",
        width: 150,
        editable: false,
      },
      {
        field: "answer_1",
        headerName: "Answer 1",
        width: 150,
        editable: false,
      },
      {
        field: "answer_2",
        headerName: "Answer 2",
        width: 150,
        editable: false,
      },
      {
        field: "answer_3",
        headerName: "Answer 3",
        width: 150,
        editable: false,
      },
      {
        field: "answer_4",
        headerName: "Answer 4",
        width: 150,
        editable: false,
      },
      {
        field: "facebook_link",
        headerName: "Facebook",
        width: 150,
        editable: false,
      },
      {
        field: "twitter_link",
        headerName: "Twitter",
        width: 150,
        editable: false,
      },
      {
        field: "instagram_link",
        headerName: "Instagram",
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
        field: "is_complete",
        headerName: "Completed",
        type: "boolean",
        width: 150,
        editable: true,
      },
      {
        field: "is_approved",
        headerName: "Approved",
        width: 150,
        editable: true,
      },
  ];

  // handles edits made to the DataGrid
  const processRowUpdate = (newValue, oldValue) => {
    console.log("in process row update", newValue, oldValue);
    return newValue;
  };

  const handleProcessRowUpdateError = (error) => {
    console.log("whoops!", error);
  };

  return (
    <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
      <DataGrid
        rows={allyApplications}
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
export default AllyApplicationReport;
