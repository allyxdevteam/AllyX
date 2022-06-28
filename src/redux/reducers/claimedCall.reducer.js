const claimedCall = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CLAIMED_CALL':
          return action.payload;
        default:
          return state;
      }
    };

    export default claimedCall;