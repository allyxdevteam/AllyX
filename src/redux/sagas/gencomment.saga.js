import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchGenComments(action){
    // HTTP GET comments 
}

function* genCommentSaga(){
    yield takeLatest('FETCH_GEN_COMMENTS', fetchGenComments);
}

export default genCommentSaga