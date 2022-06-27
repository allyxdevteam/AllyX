import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function CommentReport() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch({ type: "FETCH_GEN_COMMENTS" });
    }, []);

    const comments = useSelector((store) => store.gencomments);

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
        field: "num_stars",
        headerName: "Rating",
        width: 80,
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
  ]
    return (
        <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
          <DataGrid
            rows={comments}
            columns={columns}
            pageSize={10}
            density="compact"
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            experimentalFeatures={{ newEditingApi: true }}
            // onCellEditStop={handleEdit}
          />
        </Box>
      );
    }
    export default CommentReport;