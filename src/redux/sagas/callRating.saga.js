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

function* allyCallRating(action) {
    console.log('this is the payload', action.payload);
    yield axios({
        method: 'POST',
        url: '/api/rate-call/ally',
        data: action.payload
    })
}

function* memberCallRating(action) {
    console.log('this is the payload', action.payload);
    yield axios({
        method: 'POST',
        url: '/api/rate-call/member',
        data: action.payload
    })
}


function* deleteCallRating(action){
    const response = yield axios ({
        method: 'DELETE',
        url: `/api/rate-call/${action.payload}`,
    })
    yield put ({
        type: 'FETCH_CALL_RATINGS'
    })
}


function* callRatingSaga() {
    yield takeLatest('FETCH_CALL_RATINGS', fetchCallRatings);
    yield takeLatest('ALLY_CALL_RATING', allyCallRating);
    yield takeLatest('MEMBER_CALL_RATING', memberCallRating);
    yield takeLatest('DELETE_CALL_RATING', deleteCallRating);
  }

export default callRatingSaga;