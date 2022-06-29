import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchReports() {
    const response = yield axios({
        method: 'GET',
        url: `/api/report/`
    })
    yield put({
        type: 'SET_REPORTS',
        payload: response.data
    })
}

function* reportSaga() {
    yield takeLatest('FETCH_REPORTS', fetchReports);
}

export default reportSaga;