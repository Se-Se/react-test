const testReducer = (
  state = {
    test_info: null,
  },
  action
) => {
  switch (action.type) {
    case "SET_TEST_INFO":
      return { ...state, test_info: action.data };
    default:
      return state;
  }
};
export default testReducer;
