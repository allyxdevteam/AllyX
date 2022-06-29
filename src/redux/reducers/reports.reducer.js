const reportsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_REPORTS':
        return action.payload;
      case 'UNSET_REPORTS':
        return [];
      default:
        return state;
    }
  };
  
  export default reportsReducer;
  