import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
            <h3
                onClick={() => {
                    history.push('/ally-application')
                }}
            >
                Apply to become an Ally
            </h3>
        )
    } else if (allyApplication.is_complete === true && allyApplication.is_approved === true) {
        return <h3>Thank you for being an Ally!</h3>
    } else if (allyApplication.is_complete === true && allyApplication.is_approved === false) {
        return <h3>Your Ally application is being reviewed, thanks for applying!</h3>
    } else if (allyApplication.is_complete === false && allyApplication.is_approved === false) {
        return (
            <h3
                onClick={() => {
                    history.push('/ally-application')
                }}
            >
                Your application requires attention.
            </h3>
        )
        }
    else if (allyApplication.is_complete === true) {
         return (
             <h3
                        onClick={() => {
                            history.push('/ally-application')
                        }}
            >
                        Your application has been submitted and is awaiting Approval.
                    </h3>
                )
                    }
    else{
        return(
            <>
            <h3>Ally Application has not been submitted</h3>
            </>
        )
    }
    
}

export default AllyApplicationStatus;