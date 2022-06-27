const genCommentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GEN_COMMENTS':
          return action.payload;
        case 'UNSET_GEN_COMMENTS':
          return [];
        default:
          return state;
      }
    };

export default genCommentsReducer;