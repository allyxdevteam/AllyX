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

function* postCallEndedTimeAlly(action){
    
    const callId = action.payload.claimedCallId;
    const dateTime = action.payload.dateTime;

    try{
        const response = yield axios({
            method: 'PUT',
            url: `/api/callInProgress/${callId}`,
            data: {callId, dateTime}
        });
    }catch{
        console.log('problem in post call end time ally');
    }
}

function* postCallEndedTimeMember(action){
    
    const userId = action.payload.user.id;
    const dateTime = action.payload.dateTime;

    try{
        const response = yield axios({
            method: 'PUT',
            url: `/api/callInProgress/${callId}`,
            data: {callId, dateTime}
        });
    }catch{
        console.log('problem in post call end time member');
    }
}




function* callInProgressSaga() {
    yield takeLatest('PUT_CALL_STARTED_TIME', postCallStartedTime);
    yield takeLatest('PUT_CALL_ENDED_TIME_ALLY', postCallEndedTimeAlly);
    yield takeLatest('PUT_CALL_ENDED_TIME_MEMBER', postCallEndedTimeMember);

  }

export default callInProgressSaga;