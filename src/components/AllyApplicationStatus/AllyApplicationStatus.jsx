import { useSelector } from 'react-redux';

function AllyApplicationStatus() {

    const allyApplication = useSelector(store => store.allyApplication)

    if (allyApplication.id === undefined) {
        return (
            <h3
                onClick={() => {
                    history.push('/allyApplication')
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
                    history.push('/allyApplication')
                }}
            >
                Your application requires attention.
            </h3>
        )
    }
}

export default AllyApplicationStatus;