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

function* deleteReport(action){
    const response = yield axios ({
        method: 'DELETE',
        url: `/api/report/${action.payload}`,
    })
    yield put ({
        type: 'FETCH_REPORTS'
    })
}

function* reportSaga() {
    yield takeLatest('FETCH_REPORTS', fetchReports);
    yield takeLatest('DELETE_REPORTS', deleteReport);
}

export default reportSaga;