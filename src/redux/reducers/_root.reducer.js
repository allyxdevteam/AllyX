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
  users,
  claimedCall,
});
export default rootReducer;
