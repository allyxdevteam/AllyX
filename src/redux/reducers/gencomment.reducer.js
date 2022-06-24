const genCommentReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GEN_COMMENT':
          return action.payload;
        case 'UNSET_GEN_COMMENT':
          return [];
        default:
          return state;
      }
    };

    export default genCommentReducer;