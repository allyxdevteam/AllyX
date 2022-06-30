import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { DataGrid, GridToolbar, GridActionsCellItem, GridCellParams } from "@mui/x-data-grid";
import {Box, Tooltip} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ReplyIcon from '@mui/icons-material/Reply';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';


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
      width: 80,
      editable: false,
    },
    {
        field: "username",
        headerName: "Username",
        width: 120,
        editable: false,
      },
      {
        field: "first_name",
        headerName: "First Name",
        width: 120,
        editable: false,
      },
      {
        field: "last_name",
        headerName: "Last Name",
        width: 120,
        editable: false,
      },
      {
        field: "city",
        headerName: "City",
        width: 120,
        editable: false,
      },
      {
        field: "dob",
        headerName: "Birthday",
        width: 110,
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
        width: 90,
        editable: false,
      },
      {
        field: "is_approved",
        headerName: "Approved",
        width: 90,
        editable: false,
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id, row }) => {
          return [
            <GridActionsCellItem
              icon={<Tooltip title="Approve"><CheckIcon /></Tooltip>}
              label="Approve"
              color="inherit"
              onClick={handleApprove(id, row.user_id)}
            />,
            <GridActionsCellItem
              icon={<Tooltip title="Reopen (contact user)"><ReplyIcon /></Tooltip>}
              label="Reopen (contact user)"
              color="inherit"
            //   onClick={handleDeleteClick(id)}
            />,
            <GridActionsCellItem
              icon={<Tooltip title="Reject"><DoNotDisturbIcon /></Tooltip>}
              label="Reject"
              color="inherit"
            //   onClick={handleDeleteClick(id)}
            />,
          ];
        },
      },
  ];

  // contains a layer of abstraction else this function will execute on render (MUI's choice not mine)
  const handleApprove = (id, user_id) => () => {
  console.log('in approve', id, user_id)
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
      />
    </Box>
  );
}
export default AllyApplicationReport;
