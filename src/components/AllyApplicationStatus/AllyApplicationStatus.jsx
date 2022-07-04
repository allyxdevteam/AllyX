import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { Typography, Button } from '@mui/material'

function AllyApplicationStatus() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_ALLY_APPLICATION',
            payload: user.id
        });
      }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const allyApplication = useSelector(store => store.allyApplication);
    const user = useSelector(store => store.user);

    console.log('**************************************************', allyApplication);
    
    if (allyApplication.id === undefined) {
        return (
            <Button variant='contained' sx={{m:'10px'}}
                onClick={() => {
                    history.push('/ally-application')
                }}
            >
                Apply to become an Ally
            </Button>
        )
    } else if (allyApplication.is_complete === true && allyApplication.is_approved === true) {
        return <Typography sx={{m:'10px'}}>Thank you for being an Ally!</Typography>
    } else if (allyApplication.is_complete === true && allyApplication.is_approved === false) {
        return <Typography sx={{m:'10px'}}>Your Ally application is being reviewed, thanks for applying!</Typography>
    } else if (allyApplication.is_complete === false && allyApplication.is_approved === false) {
        return (
            <Button sx={{m:'10px'}}
                onClick={() => {
                    history.push('/ally-application')
                }}
            >
                Your application requires attention!
            </Button>
        )
        }
    else if (allyApplication.is_complete === true) {
         return (
             <Typography sx={{m:'10px'}}
                        onClick={() => {
                            history.push('/ally-application')
                        }}
            >
                        Your application has been submitted and is awaiting Approval.
                    </Typography>
                )
                    }
    else{
        return(
            <>
            <Typography sx={{m:'10px'}}>Ally Application has not been submitted</Typography>
            </>
        )
    }
    
}

export default AllyApplicationStatus;