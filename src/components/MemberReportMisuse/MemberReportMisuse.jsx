import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from "@mui/material";

function MemberReportMisuse() {

    const [misuseComments, setMisuseComments] = useState('');
    const dispatch = useDispatch();
    const claimedCallId = useSelector(store => store.claimedCall.claimedCall);
    const  claimedCall = useSelector(store => store.claimedCall);

    const handleSubmit = () => {
        dispatch({
            type: 'MARK_ALLY_REPORTED',
            payload: {  }
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <TextField 
                onChange={() => {setMisuseComments(e.target.value)}}
                value={misuseComments}
            />
            <Button
                onClick={() => {
                    dispatch({
                        type: 'MEMBER_REPORT_MISUSE',
                        payload: { claimedCallId,  misuseComments }
                    })
                }}
            >
                Report Misuse
            </Button>
        </form>
    )
}

export default MemberReportMisuse;
