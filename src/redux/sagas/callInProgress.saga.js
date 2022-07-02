import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';


function* putCallStartedTime(action){
    
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

function* putCallEndedTimeAlly(action){
    
    const callId = action.payload.claimedCallId;
    const dateTime = action.payload.dateTime;

    try{
        const response = yield axios({
            method: 'PUT',
            url: `/api/callInProgress/end/ally/${callId}`,
            data: {callId, dateTime}
        });
    }catch{
        console.log('problem in post requested call');
    }
}

function* putCallEndedTimeMember(action){
    
    const requestedCallId = action.payload.requestedCallId;
    const dateTime = action.payload.dateTime;

    try{
        const response = yield axios({
            method: 'PUT',
            url: `/api/callInProgress/end/member/${requestedCallId}`,
            data: {requestedCallId, dateTime}
        });
    }catch{
        console.log('problem in post requested call');
    }
}




function* callInProgressSaga() {
    yield takeLatest('PUT_CALL_STARTED_TIME', putCallStartedTime);
    yield takeLatest('PUT_CALL_ENDED_TIME_ALLY', putCallEndedTimeAlly);
    yield takeLatest('PUT_CALL_ENDED_TIME_MEMBER', putCallEndedTimeMember);

  }

export default callInProgressSaga;