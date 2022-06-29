import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchAllyApp() {
  try {
    const getData = yield axios({
      method: "GET",
      url: "/api/allyApp",
    });

    console.log(getData.data);

    yield put({
      type: "SET_ALLY_APP",
      payload: getData.data,
    });
  } catch (err) {
    console.log("error in get ally app", err);
  }
}

function* updateAllyApp(action) {
  try {
    yield axios({
      method: `PUT`,
      url: "/api/allyApp",
      data: action.payload,
    }).then(
      put({
        type: "FETCH_ALLY_APP",
      })
    );
  } catch (err) {
    console.log("error in update ally app", err);
  }
}

function* createAllyApp(action) {
  try {
    yield axios({
      method: `POST`,
      url: "/api/allyApp",
      data: action.payload,
    });
  } catch (err) {
    console.log("error in update ally app", err);
  }
}

  // fetches all applications for the admin dashboard
function* fetchAllyApplications(){
    try{
    const applications = yield axios.get('/api/allyApp') //this may need to be updated
    yield put ({
        type: 'SET_ALLY_APPLICATIONS',
        payload: applications.data
    })
    }catch{
        console.log('fetch applications error');
    }
}

function* allyAppSaga() {
  yield takeLatest("FETCH_ALLY_APP", fetchAllyApp);
  yield takeLatest("UPDATE_ALLY_APP", updateAllyApp);
  yield takeLatest("CREATE_ALLY_APP", createAllyApp);
  yield takeLatest("FETCH_ALLY_APPLICATIONS", fetchAllyApplications);
}

export default allyAppSaga;
