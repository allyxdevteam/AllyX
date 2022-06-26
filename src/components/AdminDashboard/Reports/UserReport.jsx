import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

function UserReport(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type: 'FETCH_PROFILES'});
    }, [])

    const users = useSelector(store=>store.users);
    console.log(users);
    
    return(
        <h1>some users</h1>
    )
}
export default UserReport;