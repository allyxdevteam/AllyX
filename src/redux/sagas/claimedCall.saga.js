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
        console.log('this is the response from fetchClaimedCall:', response.data);
        // yield put({
        //     type: 'SET_CLAIMED_CALL',
        //     payload: callId
        // });
    }catch{
        console.log('problem in post requested call');
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



function* claimedCallSaga() {
    yield takeLatest('POST_CLAIMED_CALL', postClaimedCall);
    yield takeLatest('FETCH_CLAIMED_CALL', fetchClaimedCall);

  }

export default claimedCallSaga;