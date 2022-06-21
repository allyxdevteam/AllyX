function* updateProfile() {

}

function* profileSaga() {
    yield takeLatest('UPDATE_PROFILE', updateProfile);
}