import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './DisableAccount.css';
import Switch from '@mui/material/Switch';

import { Typography, Button, Box } from '@mui/material'

function DisableAccount() {
    const [checked, setChecked] = useState(true);
    const [unchecked, setUnchecked] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleCheck = (e) => {
        setChecked(e.target.checked);
    };

    const handleUncheck = (e) => {
        setUnchecked(e.target.unchecked);
    }

    return(
        user.is_active ?
            <Box display='flex' sx={{ml:'3rem'}}>
                <Typography className="disable-account">Disable account?</Typography>
                <Switch
                    unchecked={unchecked}
                    onChange={handleCheck}
                    onClick={() => {
                        dispatch({
                            type: 'DISABLE_ACCOUNT',
                            payload: user.id
                        });
                    }}
                />
                </Box>
        :
                <>
                    <Typography>Your account is currently disabled.</Typography>
                    <Typography className="disable-account">Enable account?</Typography>
                    <Switch 
                        checked={checked}
                        onChange={handleUncheck}
                        onClick={() => {
                            dispatch({
                                type: 'DISABLE_ACCOUNT',
                                payload: user.id
                            });
                        }}
                    />
            </>
    )
}

export default DisableAccount;