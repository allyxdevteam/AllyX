import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from "@mui/material";

function AllyReportAbuse() {

    const [abuseComments, setAbuseComments] = useState('');
    const dispatch = useDispatch();
    const claimedCallId = useSelector(store => store.claimedCall.claimedCall);
    const claimedCallMember = useSelector(store => store.claimedCall.claimedCallMember);

    const handleSubmit = () => {
        dispatch({
            type: 'MARK_MEMBER_REPORTED',
            payload: { claimedCallMember }
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <TextField 
                onChange={() => {setAbuseComments(e.target.value)}}
                value={abuseComments}
            />
            <Button
                onClick={() => {
                    dispatch({
                        type: 'ALLY_REPORT_ABUSE',
                        payload: { claimedCallId, claimedCallMember, abuseComments }
                    })
                }}
            >
                Report Abuse
            </Button>
        </form>
    )
}

export default AllyReportAbuse;