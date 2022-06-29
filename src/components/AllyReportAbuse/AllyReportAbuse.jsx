import { useDispatch, useSelector } from 'react-redux';

import { Button } from "@mui/material";

function ReportAbuse() {

    const dispatch = useDispatch();
    const claimedCallMember = useSelector(store => store.claimedCall.claimedCallMember);

    return (
        <>
            <Button
                onClick={() => {
                    dispatch({
                        type: 'ALLY_REPORT_ABUSE',
                        payload: claimedCallMember
                    })
                }}
            >
                Report Abuse
            </Button>
        </>
    )
}

export default ReportAbuse;