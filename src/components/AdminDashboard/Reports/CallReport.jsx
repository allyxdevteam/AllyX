import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function CallReport() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch({ type: "FETCH_CALLS" });
    }, []);

    const calls = useSelector((store) => store.calls);

//       // handles edits made to the DataGrid
//   const processRowUpdate = (newValue, oldValue) =>{
//     console.log('in process row update', newValue, oldValue)
//     return newValue
//   }

//   const handleProcessRowUpdateError = (error) => {
//     console.log('whoops!', error)
//   }
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
          },
          {
            field: "date_time_started",
            headerName: "Time Started",
            width: 150,
            editable: false,
          },
          {
            field: "date_time_ended",
            headerName: "Time Ended",
            width: 150,
            editable: false,
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
          
    ]
    

    return (
        <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
          <DataGrid
            rows={calls}
            columns={columns}
            pageSize={10}
            density="compact"
            rowsPerPageOptions={[10]}
            components={{ Toolbar: GridToolbar }}
            // experimentalFeatures={{ newEditingApi: true }}
            // processRowUpdate={processRowUpdate}
            // onProcessRowUpdateError={handleProcessRowUpdateError}
            getRowId={(row) => row.id}
          />
        </Box>
      );
    }
    export default CallReport;