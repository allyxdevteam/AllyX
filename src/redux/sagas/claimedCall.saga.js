import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';


function* getClaimedCall(action){

}

function* postClaimedCall(action){
    console.log(action.payload);
    const user = action.payload.user;
    const call = action.payload.call;
    try{
        const response = yield axios({
            method: 'POST',
            url: '/api/claimedCalls',
            data: {user, call}
        });
        yield console.log('this is response from claimedCalls............',response.data);
    }catch{
        console.log('problem in post requested call');
    }
}



function* claimedCallSaga() {
    yield takeLatest('POST_CLAIMED_CALL', postClaimedCall);
    yield takeLatest('GET_CLAIMED_CALL', getClaimedCall);

  }

export default claimedCallSaga;