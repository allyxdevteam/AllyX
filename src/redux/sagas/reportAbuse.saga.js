import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* allyReportAbuse(action) {
    yield axios({
        method: 'POST',
        url: `/api/reportAbuse/ally`,
        data: action.payload
    })
}

function* reportAbuseSaga() {
    yield takeLatest('ALLY_REPORT_ABUSE', allyReportAbuse)
}

export default reportAbuseSaga;