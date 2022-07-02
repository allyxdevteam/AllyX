import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Badge, Button } from "@mui/material";

function ConditionalAllyButton(user) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_REQUESTED_CALLS",
    });
  }, []);

  const requestedCalls = useSelector((store) => store.requestedCalls);
  const history = useHistory();

  function handleGoToAllyPage() {
    history.push("/allyRequestedCalls");
  }

  function handleGoToAllyApplication() {
    history.push("/ally-application");
  }
  if (user.user.is_ally) {
    return <Badge badgeContent={requestedCalls.length} color="primary"><Button onClick={handleGoToAllyPage}>See Requested Calls</Button></Badge>;
  } else if (!user.user.is_ally) {
    return <Button onClick={handleGoToAllyApplication}>Become an Ally</Button>;
  }
}

export default ConditionalAllyButton;
