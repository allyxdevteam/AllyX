import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import accountSaga from './account.saga';
import allyApplicationSaga from './allyApplication.saga';
import profileSaga from './profile.saga';
import genCommentSaga from './gencomment.saga';
import requestedCallSaga from './requestedCall.saga';
import scheduledCallSaga from './scheduledCall.saga';
import allyAppSaga from './allyApp.saga';
import claimedCallSaga from './claimedCall.saga';
import callInProgressSaga from './callInProgress.saga';
import reportSaga from './report.saga';
import callSaga from './calls.saga';
import callRatingSaga from './callRating.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    accountSaga(),
    allyApplicationSaga(),
    profileSaga(),
    userSaga(),
    genCommentSaga(),
    requestedCallSaga(),
    scheduledCallSaga(),
    allyAppSaga(),
    claimedCallSaga(),
    callInProgressSaga(),
    reportSaga(),
    callSaga(),
    callRatingSaga(),
  ]);
}