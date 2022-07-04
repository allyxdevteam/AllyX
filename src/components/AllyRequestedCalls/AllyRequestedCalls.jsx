import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { List, Typography, Box, Pagination, Card } from "@mui/material";

import RequestedCallItem from "./Components/RequestedCallItem";

function AllyRequestedCalls() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_REQUESTED_CALLS",
    });
  }, []);

  const requestedCalls = useSelector((store) => store.requestedCalls.requestedCalls);
  
  const user = useSelector((store) => store.user);

  //config pagination
  const listRef = useRef(null);
  const itemsPerPage = (listRef.current?.clientHeight / 130);
  const [page, setPage] = useState(1);
  const noOfPages = Math.ceil(requestedCalls.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };


  return (
    <Box className="boxDefault" ref={listRef}>
    <Typography variant="h2">Requested Calls</Typography>
      <List >
       
        {requestedCalls ? requestedCalls
        .slice((page-1)* itemsPerPage, page * itemsPerPage )
        .map((call) => {
          return <RequestedCallItem key={call.id} call={call}/>;
        }) : <Typography>No Calls Yet!</Typography>
      }
   
      </List>
      <Box display="flex" justifyContent="center">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          showFirstButton
          showLastButton
          autoResetPage="false"
        />
      </Box>
      </Box>
  );
}

export default AllyRequestedCalls;
