import {
  DEFAULT_APP_VIEW, CHANGE_APP_VIEW, UPDATE_SEARCH_STATE, UPDATE_HOUSE_STACK,
  FETCH_HOME_API, FETCH_HOME_API_ASYNC, RESET_REFRESH_HOME, RESET_REFRESH_SEARCH,
  FETCH_BY_GEOLOCATION_ASYNC
} from "../api/constants";
import HouseService from '../services/house.service';
import SearchService from '../services/search.service';

const initialState = {
  view: DEFAULT_APP_VIEW,
  houses: {
    refreshing: false, //{boolean} true > reload control | false > stop reload     
    ...HouseService.homeApiDefinition(true, [], []),
  },
  tags: HouseService.tags,
  search: {
    refreshing: false,
    error: SearchService.errorMessage(),
    ...SearchService.initData()
  },
  positionCoords: {},
  houseDetailStack: HouseService.houseStackDefintion({}, true)
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_VIEW:
      return {
        ...state,
        view: action.payload
      };

    // Home Screen
    case FETCH_HOME_API:
    case FETCH_HOME_API_ASYNC:
      return {
        ...state,
        houses: {
          ...state.houses,
          refreshing: false,
          ...action.payload
        }
      };
    case UPDATE_HOUSE_STACK:
      return {
        ...state,
        houseDetailStack: HouseService.houseStackDefintion(action.payload, false)
      };

    case RESET_REFRESH_HOME:
      return {
        ...state,
        houses: {
          ...state.houses,
          refreshing: action.payload
        }
      };
    case RESET_REFRESH_SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          refreshing: action.payload,
        }
      };


    // Search Screen
    case UPDATE_SEARCH_STATE:
      return {
        ...state,
        search: {
          refreshing: false,
          error: SearchService.errorMessage(),
          ...SearchService.updateSearchList(state.houses, action.payload.params, action.payload.query, action.payload.options),

        }
      };
    case FETCH_BY_GEOLOCATION_ASYNC:
      return {
        ...state,
        search: {
          refreshing: false,
          error: SearchService.errorMessage(action.payload.status, action.payload.message),
          ...SearchService.sortByGeolocation(state.houses, action.payload.data),

        },
        positionCoords: action.payload
      };
    default:
      return state;
  }
}
export default appReducer;
