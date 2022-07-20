import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


function* postScheduledCall(action){
    const callTime = action.payload.newDateInUTC;
    const user = action.payload.user;
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