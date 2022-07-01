import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { List, Typography, Box, usePagination, Pagination } from "@mui/material";

import RequestedCallItem from "./Components/RequestedCallItem";

function AllyRequestedCalls() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_REQUESTED_CALLS",
    });
  }, []);

  const requestedCalls = useSelector((store) => store.requestedCalls);
  const user = useSelector((store) => store.user);

  //config pagination
  const itemsPerPage = 7;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(requestedCalls.length / itemsPerPage));

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{height: '80vh'}}>
      <List>
        {requestedCalls
        .slice(page* itemsPerPage, page * itemsPerPage + itemsPerPage)
        .map((call) => {
          return <RequestedCallItem key={call.id} call={call} />;
        })}
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
