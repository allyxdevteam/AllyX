import {useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Button, Typography, Box} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';


function AllyCallInProgress(){

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_CLAIMED_CALL',
            payload: { claimedCallId, memberId }
        })
    }, []);

    const claimedCallId = useSelector(store => store.claimedCall.claimedCall);
    const claimedCallMember = useSelector(store => store.claimedCall.claimedCallMember);

    const newDate = new Date();
    const dateTime = newDate.toLocaleString();

    const memberId = params.memberId

    function handleCompleteCall(){
        dispatch({
            type: 'PUT_CALL_ENDED_TIME_ALLY',
            payload: {claimedCallId, dateTime}
        })
        history.push('/allyReviewCall');
    }

    return(
        <Box className="boxDefault">
        <Typography variant="h2" align="center" sx={[{ pt: "5vh" }, {mb:2}]}>
          You're talking to {claimedCallMember.first_name}
        </Typography>
        <Typography align="center" variant="h5" color="text.secondary" sx={{mb:2}}>
            When you're finished, please remember to hit <i>call complete</i> and leave a rating and review of your call.
        </Typography>
        <Box display='grid' alignItems="center" justifyContent="center" sx={[{ width: "40vw" }, {maxWidth: '300px'}, { m: "auto" }, {mb:2}]}>
          <img 
            src={
              claimedCallMember.profile_pic
                ? claimedCallMember.profile_pic
                : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
            }
            alt="profile picture"
          ></img>
        </Box>
  
        <Box display="grid" justifyItems="center">
          <Button
            startIcon={<DoneIcon />}
            variant="contained"
            size="large"
            onClick={handleCompleteCall}
            sx={{ m: 2 }}
          >
            Call Complete
          </Button>
        </Box>
      </Box>
    )
}

export default AllyCallInProgress