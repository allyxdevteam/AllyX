import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllyApplication(action) {
    const allyApplicationUserId = action.payload;
    const response = yield axios({
        method: 'GET',
        url: `/api/allyApplication/${allyApplicationUserId}`
    })
    yield put({
        type: 'SET_ALLY_APPLICATION',
        payload: response.data
    })
}

function* allyApplicationSaga() {
    yield takeLatest('FETCH_ALLY_APPLICATION', fetchAllyApplication);
}

export default allyApplicationSaga;