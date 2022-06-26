import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './DisableAccount.css';
import Switch from '@mui/material/Switch';

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
            <>
                <h6 className="disable-account">Disable account?</h6>
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
                </>
        :
                <>
                    <h6>Your account is currently disabled.</h6>
                    <h6 className="disable-account">Enable account?</h6>
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