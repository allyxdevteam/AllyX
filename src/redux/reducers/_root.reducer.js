import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import profile from './profile.reducer';
import gencomment from './gencomment.reducer';
import gencomments from './gencomments.reducer';
import requestedCalls from './requestedCalls.reducer';
import allyApplication from './allyApplication.reducer';
import users from './users.reducer';
import claimedCall from './claimedCall.reducer';
import allyApp from './allyApp.reducer';
import reports from './reports.reducer'
import calls from './calls.reducer';
import profileImage from './profileImage.reducer';
import allyApplications from './allyApplications.reducer';
import callRatings from './callRatings.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  profile,
  user, // will have an id and username if someone is logged in
  gencomment, // contains a general comment, not tied to a specific call
  gencomments, //contains all general comments, not tied to specific calls
  requestedCalls, 
  allyApplication,
  users, // contains all users for the admin dashboard
  claimedCall,
  allyApp,
  reports, // contains all problem reports/complaints for the admin dashboard
  profileImage,
  allyApplications, // contains all ally applications for the admin dashboard has a join to include user data
  calls, // contains all calls for the admin dashboard
  callRatings, // contains all call ratings for the admin dashboard
});
export default rootReducer;
