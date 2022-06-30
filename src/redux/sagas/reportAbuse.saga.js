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

function* memberReportAbuse(action) {
    yield axios({
        method: 'POST',
        url: `/api/reportAbuse/member`,
        data: action.payload
    })
}

function* markAllyReported(action) {
    yield axios({
        method: 'PUT',
        url: `/api/reportAbuse/member`,
        data: action.payload.id
    })
}


function* reportAbuseSaga() {
    yield takeLatest('ALLY_REPORT_ABUSE', allyReportAbuse);
    yield takeLatest('MARK_MEMBER_REPORTED', markMemberReported);
    yield takeLatest('MEMBER_REPORT_ABUSE', memberReportAbuse);
    yield takeLatest('MARK_ALLY_REPORTED', markAllyReported);
}

export default reportAbuseSaga;