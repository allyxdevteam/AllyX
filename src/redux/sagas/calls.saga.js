import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetches all calls new and old for the admin dashboard
function* fetchCalls(){
    try{
    const calls = yield axios.get('/api/claimedCalls')
    yield put ({
        type: 'SET_CALLS',
        payload: calls.data
    })
    }catch{
        console.log('fetch calls error');
    }
}

function* fetchOneCall(action) {
    //action.payload.callId.claimedCall is the call id
    const callId = action.payload.callId;
    const user = action.payload.user;

    const oneCall = yield axios({
        method: 'GET',
        url: `/api/callInProgress/${callId}`,
        data: {callId, user}
    })
    yield put ({
        type: 'SET_ONE_CALL',
        payload: oneCall.data
    })
}

function* fetchOneCallMember(action) {
    //action.payload.callId.claimedCall is the call id
    const requestedCallId = action.payload

    console.log(requestedCallId);

    const oneCall = yield axios({
        method: 'GET',
        url: `/api/callInProgress/member/${requestedCallId}`,
        data: requestedCallId
    })
    console.log(oneCall);
    yield put ({
        type: 'SET_ONE_CALL_MEMBER',
        payload: oneCall.data
    })
}


function* callsSaga() {
    yield takeLatest('FETCH_CALLS', fetchCalls);
    yield takeLatest('FETCH_ONE_CALL', fetchOneCall);
    yield takeLatest('FETCH_ONE_CALL_MEMBER', fetchOneCallMember);

  }

export default callsSaga;