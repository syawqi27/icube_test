const initialState = {
  dataCustomer: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      state.dataCustomer = action.data;
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default reducers;
