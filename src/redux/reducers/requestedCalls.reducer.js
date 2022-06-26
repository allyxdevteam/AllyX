const requestedCalls = (state = [], action) => {
    switch (action.type) {
        case 'SET_REQUESTED_CALLS':
          return action.payload;
        default:
          return state;
      }
    };

    export default requestedCalls;