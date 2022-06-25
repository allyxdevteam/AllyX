const requestedCallsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_REQUSTED_CALLS':
          return action.payload;
        default:
          return state;
      }
    };

    export default requestedCallsReducer;