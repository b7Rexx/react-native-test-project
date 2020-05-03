import {
  CHANGE_APP_VIEW, UPDATE_SEARCH_STATE, FETCH_BEST_PICK, FETCH_TRENDING_FLAT,
  UPDATE_HOUSE_STACK, RESET_REFRESH_HOME, RESET_REFRESH_SEARCH, FETCH_BY_GEOLOCATION
} from './constants';
import HouseService from '../services/house.service';
export function changeAppView(view) {
  return { type: CHANGE_APP_VIEW, payload: view };
}

export function updateSearchState(params, query, options) {
  return { type: UPDATE_SEARCH_STATE, payload: { params: params, query: query, options: options } };
}

export function fetchBestPicks() {
  return { type: FETCH_BEST_PICK, payload: HouseService.bestPickDefinition(true, []) };
}

export function fetchTrendingFlats() {
  return { type: FETCH_TRENDING_FLAT, payload: HouseService.trendingFlatDefinition(true, []) };
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
