import { useHistory } from "react-router-dom";

import { Button } from "@mui/material";

function ConditionalAllyButton(user) {
  const history = useHistory();

  function handleGoToAllyPage() {
    history.push("/allyRequestedCalls");
  }

  function handleGoToAllyApplication() {
    history.push("/ally-application");
  }
  if (user.user.is_ally) {
    return <Button onClick={handleGoToAllyPage}>Go to Ally View</Button>;
  } else if (!user.user.is_ally) {
    return <Button onClick={handleGoToAllyApplication}>Become an Ally</Button>;
  }
}

export default ConditionalAllyButton;
