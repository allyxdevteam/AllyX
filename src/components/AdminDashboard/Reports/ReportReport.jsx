import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

function ReportReport() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_REPORTS" });
  }, []);

  const reports = useSelector((store) => store.reports);

  // handles edits made to the DataGrid
  const processRowUpdate = (newValue, oldValue) => {
    console.log("in process row update", newValue, oldValue);
    return newValue;
  };

  const handleProcessRowUpdateError = (error) => {
    console.log("whoops!", error);
  };
  
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
      headerName: "Reported ID",
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
    }
  ];

  return (
    <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
      <DataGrid
        rows={reports}
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
export default ReportReport;
