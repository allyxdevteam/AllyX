import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchGenComments(action){
    // HTTP GET comments 
}

function* addGenComment(action){
    try{
        yield axios({
            method: 'POST',
            url: '/comment',
            data: action.payload
        })
    }
    catch (err){
        console.log('error adding comment', err)
    }
}

function* genCommentSaga(){
    yield takeLatest('FETCH_GEN_COMMENTS', fetchGenComments);
    yield takeLatest('ADD_GEN_COMMENT', addGenComment);
}

export default genCommentSaga