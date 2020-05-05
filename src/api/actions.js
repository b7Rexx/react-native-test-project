import * as constants from './constants';

import HouseService from '../services/house.service';
export function changeAppView(view) {
  return { type: constants.CHANGE_APP_VIEW, payload: view };
}

export function updateSearchState(params) {
  return { type: constants.UPDATE_SEARCH_STATE, payload: { params: params } };
}

export function fetchHomeApi() {
  return { type: constants.FETCH_HOME_API, payload: HouseService.homeApiDefinition(true, [], []) };
}

export function updateHouseDetailStack(houseItem) {
  return { type: constants.UPDATE_HOUSE_STACK, payload: houseItem };
}

export function resetRefreshHome(value) {
  return { type: constants.RESET_REFRESH_HOME, payload: value };
}

export function resetRefreshSearch(value) {
  return { type: constants.RESET_REFRESH_SEARCH, payload: value };
}

export function searchByGeoLocation(params) {
  return { type: constants.FETCH_BY_GEOLOCATION, payload: { list: [], params: params } };
}

export function onChangePriceSlider(low, high) {
  return { type: constants.ON_CHANGE_PRICE_SLIDER, payload: { low: low, high: high } };
}

export function onChangeFilterTags(tags) {
  return { type: constants.ON_CHANGE_FILTER_TAGS, payload: { tags: tags } };
}

export function onApplyFilter() {
  return { type: constants.ON_FILTER_APPLY };
}

export function onResetFilter() {
  return { type: constants.ON_FILTER_RESET };
}

export function onQueryChange(query) {
  return { type: constants.ON_QUERY_CHANGE, payload: { query: query } };
}

export function toggleFavourite(itemId) {
  return { type: constants.TOGGLE_FAVOURITE, payload: { itemId: itemId } };
}
