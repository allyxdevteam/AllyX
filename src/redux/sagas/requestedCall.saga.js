import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';

function* fetchRequestedCalls(){
    try{
    const requestedCalls = yield axios.get('/api/requestedCalls')
    yield put ({
        type: 'SET_REQUESTED_CALLS',
        payload: requestedCalls.data
    })
    }catch{
        console.log('fetch requested calls error');
    }
}


function* postRequestedCall(action){
    const dateTime = action.payload.dateTime;
    const user = action.payload.user;
    console.log('this is the date and time!!!!!!!!!!',dateTime);
    console.log('this is the user data!!!!!!!!!!!', user);
    try{
        yield axios({
            method: 'POST',
            url: '/api/requestedCalls',
            data: {dateTime, user}
        });
    }catch{
        console.log('problem in post requested call');
    }
}



function* requestedCallSaga() {
    yield takeLatest('POST_REQUESTED_CALL', postRequestedCall);
    yield takeLatest('FETCH_REQUESTED_CALLS', fetchRequestedCalls);
  }

export default requestedCallSaga;