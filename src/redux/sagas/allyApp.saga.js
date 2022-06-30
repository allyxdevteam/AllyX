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

// commented this out because it doesn't seem to be in use and I made a 
// put route for approving applications - MDS
// function* updateAllyApp(action) {
//   try {
//     yield axios({
//       method: `PUT`,
//       url: "/api/allyApp",
//       data: action.payload,
//     }).then(
//       put({
//         type: "FETCH_ALLY_APP",
//       })
//     );
//   } catch (err) {
//     console.log("error in update ally app", err);
//   }
// }

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
    const applications = yield axios.get('/api/allyApp/all') //this will need to be updated
    yield put ({
        type: 'SET_ALLY_APPLICATIONS',
        payload: applications.data
    })
    }catch{
        console.log('fetch applications error');
    }
}

function* handleApplication(action){
    try {
        yield axios({
          method: `PUT`,
          url: `/api/allyApp/${action.payload.id}`,
          data: action.payload,
        }).then(
          put({
            type: "FETCH_ALLY_APPLICATIONS",
          })
        );
      } catch (err) {
        console.log("error handling application", err);
      }
}

function* allyAppSaga() {
  yield takeLatest("FETCH_ALLY_APP", fetchAllyApp);
  yield takeLatest("CREATE_ALLY_APP", createAllyApp);
  yield takeLatest("FETCH_ALLY_APPLICATIONS", fetchAllyApplications);
  yield takeLatest("HANDLE_APPLICATION", handleApplication);

}

export default allyAppSaga;
