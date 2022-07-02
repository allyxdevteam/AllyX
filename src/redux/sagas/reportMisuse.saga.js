import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* allyReportMisuse(action) {
    console.log('this is the action.payload in allyReportMisuse', action.payload);
    yield axios({
        method: 'POST',
        url: `/api/reportMisuse/ally`,
        data: action.payload
    })
}

function* markMemberReported(action) {
    console.log('this is action.payload in markMemberReported', action.payload);
    yield axios({
        method: 'PUT',
        url: `/api/reportMisuse/ally`,
        data: action.payload
    })
}

function* memberReportMisuse(action) {
    yield axios({
        method: 'POST',
        url: `/api/reportMisuse/member`,
        data: action.payload
    })
}

function* markAllyReported(action) {
    yield axios({
        method: 'PUT',
        url: `/api/reportMisuse/member`,
        data: action.payload.id
    })
}


function* reportMisuseSaga() {
    yield takeLatest('ALLY_REPORT_MISUSE', allyReportMisuse);
    yield takeLatest('MARK_MEMBER_REPORTED', markMemberReported);
    yield takeLatest('MEMBER_REPORT_MISUSE', memberReportMisuse);
    yield takeLatest('MARK_ALLY_REPORTED', markAllyReported);
}

export default reportMisuseSaga;