import {Typography} from '@mui/material';
import {useHistory} from 'react-router-dom';

function Logo(){
    const history = useHistory();

    return(
        <Typography id="allyx-logo" onClick={()=>history.push('/home')} display="inline"><i>allyx</i></Typography>
    )
}

export default Logo;