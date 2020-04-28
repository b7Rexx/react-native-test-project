import { DEFAULT_APP_VIEW, CHANGE_APP_VIEW } from "../api/constants";

const initialState = {
  view: DEFAULT_APP_VIEW
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_VIEW:
      return {
        ...state,
        view: action.payload
      };
    default:
      return state;
  }
}
export default appReducer;
