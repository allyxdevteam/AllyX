import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* requestDelete(action) {
    const userId = action.payload;
    yield axios({
        method: 'PUT',
        url: `/api/account`,
        data: userId
    })}

function* disableAccount(action) {
    const userId = action.payload
    yield axios({
        method: 'PUT',
        url: `/api/account/${userId}`,
        data: userId
    })
    yield put({
        type: 'FETCH_USER'
    })
}

function* accountSaga() {
    yield takeLatest('REQUEST_DELETE', requestDelete);
    yield takeLatest('DISABLE_ACCOUNT', disableAccount);
}

export default accountSaga;