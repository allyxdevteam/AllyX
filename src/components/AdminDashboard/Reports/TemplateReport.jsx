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
    export default TemplateReport;