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


function* callsSaga() {
    yield takeLatest('FETCH_CALLS', fetchCalls);
  }

export default callsSaga;