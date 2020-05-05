import * as constants from "../api/constants";
import HouseService from '../services/house.service';
import SearchService from '../services/search.service';

const initialState = {
  view: constants.DEFAULT_APP_VIEW,
  houses: {
    refreshing: false, //{boolean} true > reload control | false > stop reload     
    ...HouseService.homeApiDefinition(true, [], []),
    NearBy: []
  },
  tags: HouseService.tags,
  search: {
    searchSwitch: '',
    refreshing: false,
    error: SearchService.errorMessage(),
    ...SearchService.initData()
  },
  positionCoords: {},
  houseDetailStack: HouseService.houseStackDefintion({}, true)
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_APP_VIEW:
      return {
        ...state,
        view: action.payload
      };

    // Home Screen
    case constants.FETCH_HOME_API:
    case constants.FETCH_HOME_API_ASYNC:
      return {
        ...state,
        houses: {
          ...state.houses,
          refreshing: false,
          ...action.payload
        }
      };
    case constants.UPDATE_HOUSE_STACK:
      return {
        ...state,
        houseDetailStack: HouseService.houseStackDefintion(action.payload, false)
      };

    case constants.RESET_REFRESH_HOME:
      return {
        ...state,
        houses: {
          ...state.houses,
          refreshing: action.payload
        }
      };
    case constants.RESET_REFRESH_SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          refreshing: action.payload,
        }
      };


    // Search Screen
    case constants.UPDATE_SEARCH_STATE:
      let updateSearchState = {
        ...state.search,
        searchSwitch: action.payload.params.searchSwitch,
        refreshing: false,
        error: SearchService.errorMessage(),
      };
      return {
        ...state,
        search: {
          ...updateSearchState,
          ...SearchService.updateSearchList(state.houses, updateSearchState),
        }
      };
    case constants.FETCH_BY_GEOLOCATION:
      return {
        ...state,
        search: {
          ...state.search,
          searchSwitch: constants.NAVIGATION.NearBy,
        }
      };
    case constants.FETCH_BY_GEOLOCATION_ASYNC:
      let updateGeolocationHouseState = {
        ...state.houses,
        NearBy: SearchService.sortByGeolocation(state.houses, action.payload.data),
      };
      let updateGeolocationSearchState = {
        ...state.search,
        refreshing: false,
        error: SearchService.errorMessage(action.payload.status, action.payload.message),
      };
      return {
        ...state,
        houses: {
          ...updateGeolocationHouseState
        },
        search: {
          ...updateGeolocationSearchState,
          ...SearchService.updateSearchList(updateGeolocationHouseState, updateGeolocationSearchState),
        },
        positionCoords: action.payload
      };
    case constants.ON_CHANGE_PRICE_SLIDER:
      return {
        ...state,
        search: {
          ...state.search,
          newFilters: {
            ...state.search.newFilters,
            priceLowValue: action.payload.low,
            priceHighValue: action.payload.high,
          }
        }
      };
    case constants.ON_CHANGE_FILTER_TAGS:
      return {
        ...state,
        search: {
          ...state.search,
          newFilters: {
            ...state.search.newFilters,
            tags: action.payload.tags,
          }
        }
      };

    case constants.ON_FILTER_APPLY:
      let onFilterApply = {
        ...state.search,
        filters: state.search.newFilters
      };
      return {
        ...state,
        search: {
          ...onFilterApply,
          ...SearchService.updateSearchList(state.houses, onFilterApply, true),
        }
      };
    case constants.ON_FILTER_RESET:
      return {
        ...state,
        search: {
          ...state.search,
          newFilters: SearchService.initData().newFilters
        }
      };
    case constants.ON_QUERY_CHANGE:
      let onQueryChange = {
        ...state.search,
        query: action.payload.query
      };
      return {
        ...state,
        search: {
          ...onQueryChange,
          ...SearchService.updateSearchList(state.houses, onQueryChange, true),
        }
      };
    default:
      return state;
  }
}
export default appReducer;
