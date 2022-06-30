import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import Swal from 'sweetalert2';

import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

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
  ]

   // contains a layer of abstraction else this function will execute on render (MUI's choice not mine)
   const handleDeleteClick = (id) => () => {
    Swal.fire({
        title: "Are you sure you want to delete this user?",
        text: "Once deleted, you will not be able to recover their data!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete'
      })
      .then((willDelete) => {
        if (willDelete) {
            dispatch({
                type: 'DELETE_PROFILE',
                payload: id
            })
          Swal.fire("The user has been deleted", {
            icon: "success",
          });
        } else {
          Swal.fire("Cancelled! The user data is safe.");
        }
      });
  };

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