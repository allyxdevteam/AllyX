import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetches all call ratings for the admin dashboard
function* fetchCallRatings(){
    try{
    const ratings = yield axios.get('/api/call-ratings')
    yield put ({
        type: 'SET_CALL_RATINGS',
        payload: ratings.data
    })
    }catch{
        console.log('fetch call ratings error');
    }
}


function* callRatingSaga() {
    yield takeLatest('FETCH_CALL_RATINGS', fetchCallRatings);
  }

export default callRatingSaga;