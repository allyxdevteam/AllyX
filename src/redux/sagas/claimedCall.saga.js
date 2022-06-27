import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';


function* postClaimedCall(action){
    console.log(action.payload);
    const user = action.payload.user;
    const call = action.payload.call;
    try{
        yield axios({
            method: 'POST',
            url: '/api/claimedCalls',
            data: {user, call}
        });
    }catch{
        console.log('problem in post requested call');
    }
}



function* claimedCallSaga() {
    yield takeLatest('POST_CLAIMED_CALL', postClaimedCall);
  }

export default claimedCallSaga;