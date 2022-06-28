import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* fetchAllyApp(){
    try{
       const getData = yield axios({
            method: 'GET',
            url: '/api/allyApp',
           
        })
        yield put({
            type:'SET_ALLY_APP',
            payload: getData,
        })
       
    }
    catch (err){
        console.log('error in get ally app', err)
    }
}

function* updateAllyApp(action){
    try{
        yield axios({
            method:`PUT`,
            url: '/api/allyApp',
            data: action.payload,
        })
    }
    catch (err){
        console.log('error in update ally app', err)
    }



}



function* createAllyApp(action){
    try{
        yield axios({
            method:`POST`,
            url: '/api/allyApp',
            data: action.payload,
        })
    }
    catch (err){
        console.log('error in update ally app', err)
    }
}



function* allyAppSaga(){
    yield takeLatest('FETCH_ALLY_APP', fetchAllyApp);
    yield takeLatest('UPDATE_ALLY_APP', updateAllyApp);
    yield takeLatest('CREATE_ALLY_APP', createAllyApp);
}

export default allyAppSaga;