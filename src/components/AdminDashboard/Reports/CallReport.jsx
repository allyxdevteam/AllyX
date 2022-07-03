import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import dayjs from 'dayjs';

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function CallReport() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CALLS" });
  }, []);

  const calls = useSelector((store) => store.calls);

  // DataGrid config
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "member_id",
      headerName: "Member ID",
      width: 90,
      editable: false,
    },
    {
      field: "ally_id",
      headerName: "Ally ID",
      width: 90,
      editable: false,
    },
    {
      field: "accepted_at",
      headerName: "Time Accepted",
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
      field: "date_time_started",
      headerName: "Time Started",
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
      field: "date_time_ended",
      headerName: "Time Ended",
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
      field: "is_done_member",
      headerName: "Member Marked Done",
      width: 150,
      type: "boolean",
      editable: false,
    },
    {
      field: "is_done_ally",
      headerName: "Ally Marked Done",
      width: 90,
      type: "boolean",
      editable: false,
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
      <DataGrid
        rows={calls}
        columns={columns}
        pageSize={10}
        density="compact"
        rowsPerPageOptions={[10]}
        components={{ Toolbar: GridToolbar }}
        getRowId={(row) => row.id}
      />
    </Box>
  );
}
export default CallReport;
