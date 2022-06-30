const callRatingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CALL_RATINGS':
          return action.payload;
        case 'UNSET_CALL_RATINGS':
          return [];
        default:
          return state;
      }
    };

export default callRatingsReducer;