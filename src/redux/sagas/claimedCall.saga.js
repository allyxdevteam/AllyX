import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';


function* fetchClaimedCall(action){
    const claimedCallId = action.payload.claimedCallId;
    const memberId = action.payload.memberId;
    console.log('this is the payload:', claimedCallId, memberId);

    try{
        const response = yield axios({
            method: 'GET',
            url: `/api/claimedCalls/${memberId}`,
        });
        const memberInfo = response.data
        yield put({
            type: 'SET_CLAIMED_CALL_MEMBER',
            payload: memberInfo
        });
    }catch(err){
        console.log('problem in post requested call', err);
    }
}

function* postClaimedCall(action){
    const user = action.payload.user;
    const call = action.payload.call;
    try{
        const response = yield axios({
            method: 'POST',
            url: '/api/claimedCalls',
            data: {user, call}
        });
        const callId = response.data.callId;
        const memberId = response.data.memberId;
        yield put({
            type: 'SET_CLAIMED_CALL',
            payload: callId
        });
    }catch{
        console.log('problem in post requested call');
    }
}

function* cancelClaimedCall(action){
    const requestedCallId = action.payload;
    
    try{
        const response = yield axios({
            method: 'PUT',
            url: `/api/claimedCalls/${requestedCallId}`,
            data: requestedCallId
        });

    }catch{
        console.log('problem in cancel claimed call');
    }
}



function* claimedCallSaga() {
    yield takeLatest('POST_CLAIMED_CALL', postClaimedCall);
    yield takeLatest('FETCH_CLAIMED_CALL', fetchClaimedCall);
    yield takeLatest('CANCEL_CLAIMED_CALL', cancelClaimedCall);


  }

export default claimedCallSaga;