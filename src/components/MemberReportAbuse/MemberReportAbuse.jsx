import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from "@mui/material";

function MemberReportAbuse() {

    const [abuseComments, setAbuseComments] = useState('');
    const dispatch = useDispatch();
    const claimedCallId = useSelector(store => store.claimedCall.claimedCall);
    const  = useSelector(store => store.claimedCall.);

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
                onChange={() => {setAbuseComments(e.target.value)}}
                value={abuseComments}
            />
            <Button
                onClick={() => {
                    dispatch({
                        type: 'MEMBER_REPORT_ABUSE',
                        payload: { claimedCallId, , abuseComments }
                    })
                }}
            >
                Report Abuse
            </Button>
        </form>
    )
}

export default AllyReportAbuse;