import {
  DEFAULT_APP_VIEW, CHANGE_APP_VIEW, UPDATE_SEARCH_STATE, UPDATE_HOUSE_STACK,
  FETCH_BEST_PICK, FETCH_BEST_PICK_ASYNC, FETCH_TRENDING_FLAT, FETCH_TRENDING_FLAT_ASYNC
} from "../api/constants";
import HouseService from '../services/house.service';
import SearchService from '../services/search.service';

const initialState = {
  view: DEFAULT_APP_VIEW,
  houses: {
    bestPicks: HouseService.bestPickDefinition(true, []),
    trendingFlats: HouseService.trendingFlatDefinition(true, [])
  },
  tags: HouseService.tags,
  search: SearchService.initData(),
  houseDetailStack: HouseService.houseStackDefintion({}, true)
};

const appReducer = (state = initialState, action) => {
  // console.log('appReducer > ', action.type, ' < > ', action);
  switch (action.type) {
    case CHANGE_APP_VIEW:
      return {
        ...state,
        view: action.payload
      };
    case UPDATE_SEARCH_STATE:
      let searchState = SearchService.updateSearchList(state.houses, action.payload.params, action.payload.query, action.payload.options);
      return {
        ...state,
        search: searchState
      };
    case FETCH_BEST_PICK:
      return {
        ...state,
        houses: {
          ...state.houses,
          bestPicks: action.payload
        }
      };
    case FETCH_BEST_PICK_ASYNC:
      return {
        ...state,
        houses: {
          ...state.houses,
          bestPicks: action.payload
        }
      };
    case FETCH_TRENDING_FLAT:
      return {
        ...state,
        houses: {
          ...state.houses,
          trendingFlats: action.payload
        }
      };
    case FETCH_TRENDING_FLAT_ASYNC:
      return {
        ...state,
        houses: {
          ...state.houses,
          trendingFlats: action.payload
        }
      };
    case UPDATE_HOUSE_STACK:
      return {
        ...state,
        houseDetailStack: HouseService.houseStackDefintion(action.payload, false)
      };
    default:
      return state;
  }
}
export default appReducer;
