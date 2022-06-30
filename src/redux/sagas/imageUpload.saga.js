import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* cloudinaryPost(action){
    const image = action.payload
    console.log('this is the post payload', image);
    try{
      const response = yield axios({
      method: 'POST',
      url: '/imageUpload',
      data: image
    })
    yield put ({
        type: 'SET_IMAGE',
        payload: response.data.picture
    }) 
  } catch(error) {
    console.log('postimage broke, because:', error);
  }

  }


function* imageUploadSaga(){
    yield takeLatest('POST_IMAGE', cloudinaryPost)
}

export default imageUploadSaga