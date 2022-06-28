import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';


function* postCallStartedTime(action){
    
    const callId = action.payload.claimedCallId;
    const dateTime = action.payload.dateTime;

    try{
        const response = yield axios({
            method: 'PUT',
            url: '/api/callInProgress',
            data: {callId, dateTime}
        });
        // const callId = response.data.callId;
        // const memberId = response.data.memberId;
        // yield put({
        //     type: 'SET_CLAIMED_CALL',
        //     payload: callId
        // });
    }catch{
        console.log('problem in post requested call');
    }
}




function* callInProgressSaga() {
    yield takeLatest('PUT_CALL_STARTED_TIME', postCallStartedTime);
  }

export default callInProgressSaga;