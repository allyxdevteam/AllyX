import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Box, TextField } from "@mui/material";

function AllyReportMisuse() {

    const [misuseComments, setMisuseComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const claimedCallId = useSelector(store => store.claimedCall.claimedCall);
    const claimedCallMember = useSelector(store => store.claimedCall.claimedCallMember);

    // const handleSubmit = () => {
        

    return (
        <>
        <Box sx={[{height: '80vh'},{width: '98vw'}, {margin: 'auto'}]} display='flex' flexDirection='column' justifyContent = 'center'>
            <TextField 
                onChange={(e) => {setMisuseComments(e.target.value)}}
                value={misuseComments}
            />
            <Button
                onClick={() => {
                    history.push('/');
                    dispatch({
                        type: 'MARK_MEMBER_REPORTED',
                        payload: { claimedCallMember }
                    })
                    dispatch({
                        type: 'ALLY_REPORT_MISUSE',
                        payload: { claimedCallId, claimedCallMember, misuseComments }
                    })
                }}
            >
                Report Misuse
            </Button>
            </Box>
        </>
    )
}

export default AllyReportMisuse;