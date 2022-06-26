import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProfile(action) {
    const profileId = action.payload;
    const response = yield axios({
        method: 'GET',
        url: `/api/profile/${profileId}`
    })
    yield put({
        type: 'SET_EDIT_PROFILE',
        payload: response.data
    })
}

function* updateProfile(action) {
    const updatedProfile = action.payload;
    // console.log('******************************************', updatedProfile);
    yield axios({
        method: 'PUT',
        url: `/api/profile/${updatedProfile.id}`,
        data: updatedProfile
    })
    yield put({
        type: 'FETCH_USER'
        // payload: updatedProfile
    })
}

function* fetchProfiles() {
    const response = yield axios({
        method: 'GET',
        url: `/api/profile/`
    })
    yield put({
        type: 'SET_USERS',
        payload: response.data
    })
}

function* profileSaga() {
    yield takeLatest('FETCH_PROFILE', fetchProfile);
    yield takeLatest('UPDATE_PROFILE', updateProfile);
    yield takeLatest('FETCH_PROFILES', fetchProfiles);
}

export default profileSaga;