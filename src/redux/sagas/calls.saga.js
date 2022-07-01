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


function* callsSaga() {
    yield takeLatest('FETCH_CALLS', fetchCalls);
    yield takeLatest('FETCH_ONE_CALL', fetchOneCall);
  }

export default callsSaga;