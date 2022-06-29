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
    }catch{
        console.log('problem in post requested call');
    }
}

function* postCallEndedTime(action){
    
    const callId = action.payload.claimedCallId;
    const dateTime = action.payload.dateTime;

    try{
        const response = yield axios({
            method: 'PUT',
            url: `/api/callInProgress/${callId}`,
            data: {callId, dateTime}
        });
    }catch{
        console.log('problem in post requested call');
    }
}




function* callInProgressSaga() {
    yield takeLatest('PUT_CALL_STARTED_TIME', postCallStartedTime);
    yield takeLatest('PUT_CALL_ENDED_TIME', postCallEndedTime);
  }

export default callInProgressSaga;