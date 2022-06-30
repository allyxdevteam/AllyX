import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function CallRatingReport() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CALL_RATINGS" });
  }, []);

  const callRatings = useSelector((store) => store.callRatings);

  // DataGrid config
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "reviewer_id",
      headerName: "Reviewer ID",
      width: 90,
      editable: false,
    },
    {
        field: "recipient_id",
        headerName: "User Reviewed",
        width: 90,
        editable: false,
      },
      {
        field: "call_id",
        headerName: "Call ID",
        width: 90,
        editable: false,
      },
      {
        field: "num_stars",
        headerName: "Rating",
        width: 90,
        editable: false,
      },
      {
        field: "comment",
        headerName: "Comment",
        width: 200,
        editable: false,
      },
      {
        field: "inserted_at",
        headerName: "Date",
        width: 150,
        editable: false,
      }
  ];

  //       // handles edits made to the DataGrid
  //   const processRowUpdate = (newValue, oldValue) =>{
  //     console.log('in process row update', newValue, oldValue)
  //     return newValue
  //   }

  //   const handleProcessRowUpdateError = (error) => {
  //     console.log('whoops!', error)
  //   }

  return (
    <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
      <DataGrid
        rows={callRatings}
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
export default CallRatingReport;
