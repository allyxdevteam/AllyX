import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';


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
  }

export default requestedCallSaga;