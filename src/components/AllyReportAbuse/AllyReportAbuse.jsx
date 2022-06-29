import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from "@mui/material";

function ReportAbuse() {

    const [abuseComments, setAbuseComments] = useState('');
    const dispatch = useDispatch();
    const claimedCallMember = useSelector(store => store.claimedCall.claimedCallMember);

    return (
        <>
            <TextField 
                onChange={() => {setAbuseComments(e.target.value)}}
                value={abuseComments}
            />
            <Button
                onClick={() => {
                    dispatch({
                        type: 'ALLY_REPORT_ABUSE',
                        payload: claimedCallMember.id
                    })
                }}
            >
                Report Abuse
            </Button>
        </>
    )
}

export default ReportAbuse;