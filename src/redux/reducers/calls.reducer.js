const callsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CALLS':
          return action.payload;
        case 'UNSET_CALLS':
          return [];
        default:
          return state;
      }
    };

export default callsReducer;