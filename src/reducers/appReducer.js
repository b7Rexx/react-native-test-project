import { DEFAULT_APP_VIEW, CHANGE_APP_VIEW, UPDATE_SEARCH_STATE } from "../api/constants";
import HouseService from '../services/house.service';
import SearchService from '../services/search.service';

const initialState = {
  view: DEFAULT_APP_VIEW,
  houses: {
    list: HouseService.list,
  },
  tags: HouseService.tags,
  search: SearchService.initData(),
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_VIEW:
      return {
        ...state,
        view: action.payload
      };
    case UPDATE_SEARCH_STATE:
      let searchState = SearchService.updateSearchList(action.payload.query, action.payload.tags);
      return {
        ...state,
        search: searchState
      };
    default:
      return state;
  }
}
export default appReducer;
