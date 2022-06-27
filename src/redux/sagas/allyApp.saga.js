import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* fetchAllyApp(action){
    try{
        console.log(action.payload)
       const getData = yield axios({
            method: 'GET',
            url: '/api/ally-app',
           
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
        console.log('Update App Data', action.payload)
        yield axios({
            method:`PUT`,
            url: '/api/ally-app',
            data: action.payload,
        })
    }
    catch (err){
        console.log('error in update ally app', err)
    }



}
function* createAllyApp(action){
    try{
        console.log('Post App Data', action.payload)
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