import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

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
        valueFormatter: (params) =>{
          if(params.value == null) {
            return('');
          }
  
          const formattedDate = dayjs(params.value).format('MM/DD/YY, hh:mm A');
          return `${formattedDate}`;
        }
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

   // contains a layer of abstraction else this function will execute on render (MUI's choice not mine)
   const handleDeleteClick = (id) => () => {
    Swal.fire({
        title: "Are you sure you want to delete this call rating?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete'
      })
      .then((willDelete) => {
        if (willDelete) {
            dispatch({
                type: 'DELETE_CALL_RATING',
                payload: id
            })
          Swal.fire("The call rating has been deleted", {
            icon: "success",
          });
        } else {
          Swal.fire("Cancelled! The data is safe.");
        }
      });
  };

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
        rows={callRatings}
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
export default CallRatingReport;
