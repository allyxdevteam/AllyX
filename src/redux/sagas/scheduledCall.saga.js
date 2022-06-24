import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';


function* postScheduledCall(action){
    const callTime = action.payload.callTime;
    const user = action.payload.user;
    console.log('this is the scheduled date and time!!!!!!!!!!',callTime);
    console.log('this is the user data!!!!!!!!!!!', user);
    try{
        yield axios({
            method: 'POST',
            url: '/api/scheduledCalls',
            data: {callTime, user}
        });
    }catch{
        console.log('problem in post scheduled call');
    }
}



function* scheduledCallSaga() {
    yield takeLatest('POST_SCHEDULED_CALL', postScheduledCall);
  }

export default scheduledCallSaga;