import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateProfile(action) {
    const updatedProfile = action.payload
    const response = yield axios({
        method: 'PUT',
        url: `/api/user/${updatedProfile.id}`,
        data: updatedProfile
    })
    yield put({
        type: 'FETCH_USER'
    })
}

function* profileSaga() {
    yield takeLatest('UPDATE_PROFILE', updateProfile);
}

export default profileSaga;