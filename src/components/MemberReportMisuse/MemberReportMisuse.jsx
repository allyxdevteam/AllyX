import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, TextField } from "@mui/material";

function MemberReportMisuse() {

    const [misuseComments, setMisuseComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const requestedCallId = useSelector(store => store.requestedCalls.requestedCall);
    const completedCall = useSelector(store => store.claimedCall.oneCallReducerMember);
    const allyId = completedCall.ally_id;

    return (
        <Box
            sx={[{height: '80vh'},{width: '98vw'}, {margin: 'auto'}]}
            display='flex'
            flexDirection='column' 
            justifyContent = 'center'
        >
            <TextField 
                onChange={(e) => {setMisuseComments(e.target.value)}}
                value={misuseComments}
            />
            <Button
                onClick={() => {
                    dispatch({
                        type: 'MEMBER_REPORT_MISUSE',
                        payload: { requestedCallId, allyId, misuseComments }
                    })
                    dispatch({
                        type: 'MARK_ALLY_REPORTED',
                        payload: { allyId }
                    })
                    history.push('/');
                }}
            >
                Report Misuse
            </Button>
        </Box>
    )
}

export default MemberReportMisuse;
