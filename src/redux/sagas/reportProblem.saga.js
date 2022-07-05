import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* allyReportProblem(action) {
    console.log('this is the action.payload in allyReportProblem', action.payload);
    yield axios({
        method: 'POST',
        url: `/api/reportProblem/ally`,
        data: action.payload
    })
}

function* markMemberReported(action) {
    console.log('this is action.payload in markMemberReported', action.payload);
    yield axios({
        method: 'PUT',
        url: `/api/reportProblem/ally`,
        data: action.payload
    })
}

function* memberReportProblem(action) {
    yield axios({
        method: 'POST',
        url: `/api/reportProblem/member`,
        data: action.payload
    })
}

function* markAllyReported(action) {
    yield axios({
        method: 'PUT',
        url: `/api/reportProblem/member`,
        data: action.payload
    })
}


function* reportProblemSaga() {
    yield takeLatest('ALLY_REPORT_PROBLEM', allyReportProblem);
    yield takeLatest('MARK_MEMBER_REPORTED', markMemberReported);
    yield takeLatest('MEMBER_REPORT_PROBLEM', memberReportProblem);
    yield takeLatest('MARK_ALLY_REPORTED', markAllyReported);
}

export default reportProblemSaga;