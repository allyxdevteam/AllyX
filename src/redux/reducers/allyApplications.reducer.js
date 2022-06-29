const allyApplicationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALLY_APPLICATIONS':
          return action.payload;
        case 'UNSET_ALLY_APPLICATIONS':
          return [];
        default:
          return state;
      }
    };

export default allyApplicationsReducer;