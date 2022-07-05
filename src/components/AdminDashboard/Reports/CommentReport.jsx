import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

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
  ]

   // contains a layer of abstraction else this function will execute on render (MUI's choice not mine)
   const handleDeleteClick = (id) => () => {
    Swal.fire({
        title: "Are you sure you want to delete this comment?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete'
      })
      .then((willDelete) => {
        if (willDelete) {
            dispatch({
                type: 'DELETE_GEN_COMMENT',
                payload: id
            })
          Swal.fire("The comment has been deleted", {
            icon: "success",
          });
        } else {
          Swal.fire("Cancelled! The data is safe.");
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
          />
        </Box>
      );
    }
    export default CommentReport;