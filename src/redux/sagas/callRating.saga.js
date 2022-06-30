import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetches all call ratings for the admin dashboard
function* fetchCallRatings(){
    try{
    const ratings = yield axios.get('/api/rate-call')
    yield put ({
        type: 'SET_CALL_RATINGS',
        payload: ratings.data
    })
    }catch{
        console.log('fetch call ratings error');
    }
}

function* addCallRating(action) {
    yield axios({
        method: 'POST',
        url: '/api/rate-call',
        data: action.payload
    })
}


function* callRatingSaga() {
    yield takeLatest('FETCH_CALL_RATINGS', fetchCallRatings);
    yield takeLatest('ADD_CALL_RATING', addCallRating);
  }

export default callRatingSaga;