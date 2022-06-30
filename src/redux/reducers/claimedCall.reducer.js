import { combineReducers } from 'redux';


const claimedCall = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CLAIMED_CALL':
          return action.payload;
        default:
          return state;
      }
    };

    const claimedCallMember = (state = {}, action) => {
        switch (action.type) {
            case 'SET_CLAIMED_CALL_MEMBER':
              return action.payload;
            default:
              return state;
          }
        };

const oneCallReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ONE_CALL':
      return action.payload;
    case 'UNSET_ONE_CALL':
      return [];
    default:
      return state;
  }
}

    export default combineReducers({
        claimedCall,
        claimedCallMember,
        oneCallReducer,
      });