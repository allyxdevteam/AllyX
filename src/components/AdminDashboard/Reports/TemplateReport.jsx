import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function TemplateReport() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch({ type: "FETCH_PROFILES" });
    }, []);

    const users = useSelector((store) => store.users);

    return (
        <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
          <DataGrid
            rows={users}
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
    export default TemplateReport;