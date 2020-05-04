import {
  CHANGE_APP_VIEW, UPDATE_SEARCH_STATE, FETCH_HOME_API, UPDATE_HOUSE_STACK,
  RESET_REFRESH_HOME, RESET_REFRESH_SEARCH, FETCH_BY_GEOLOCATION, ON_CHANGE_PRICE_SLIDER, ON_CHANGE_FILTER_TAGS, ON_FILTER_APPLY,
} from './constants';
import HouseService from '../services/house.service';
export function changeAppView(view) {
  return { type: CHANGE_APP_VIEW, payload: view };
}

export function updateSearchState(params, query, options) {
  return { type: UPDATE_SEARCH_STATE, payload: { params: params, query: query, options: options } };
}

export function fetchHomeApi() {
  return { type: FETCH_HOME_API, payload: HouseService.homeApiDefinition(true, [], []) };
}

export function updateHouseDetailStack(houseItem) {
  return { type: UPDATE_HOUSE_STACK, payload: houseItem };
}

export function resetRefreshHome(value) {
  return { type: RESET_REFRESH_HOME, payload: value };
}

export function resetRefreshSearch(value) {
  return { type: RESET_REFRESH_SEARCH, payload: value };
}

export function searchByGeoLocation() {
  return { type: FETCH_BY_GEOLOCATION, payload: [] };
}

export function onChangePriceSlider(low, high) {
  return { type: ON_CHANGE_PRICE_SLIDER, payload: { low: low, high: high } };
}

export function onChangeFilterTags(tags) {
  return { type: ON_CHANGE_FILTER_TAGS, payload: { tags: tags } };
}

export function onApplyFilter() {
  return { type: ON_FILTER_APPLY };
}
