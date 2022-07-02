import { combineReducers } from 'redux';


const requestedCalls = (state = [], action) => {
  switch (action.type) {
    case 'SET_REQUESTED_CALLS':
      return action.payload;
    default:
      return state;
  }
};

const requestedCall = (state = [], action) => {
  switch (action.type) {
    case 'SET_REQUESTED_CALL':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  requestedCalls,
  requestedCall,
});