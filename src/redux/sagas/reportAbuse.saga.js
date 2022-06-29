import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* allyReportAbuse(action) {
    const memberId = action.payload
    yield axios({
        method: 'PUT',
        url: `/api/report`,
        data: memberId
    })
}

function* reportAbuseSaga() {
    yield takeLatest('ALLY_REPORT_ABUSE', allyReportAbuse)
}

export default reportAbuseSaga;