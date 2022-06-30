import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* allyReportAbuse(action) {
    yield axios({
        method: 'POST',
        url: `/api/reportAbuse/ally`,
        data: action.payload
    })
}

function* markMemberReported(action) {
    yield axios({
        method: 'PUT',
        url: `/api/reportAbuse/ally`,
        data: action.payload.id
    })
}

function* reportAbuseSaga() {
    yield takeLatest('ALLY_REPORT_ABUSE', allyReportAbuse);
    yield takeLatest('MARK_MEMBER_REPORTED', markMemberReported);
}

export default reportAbuseSaga;