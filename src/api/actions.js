import { CHANGE_APP_VIEW, UPDATE_SEARCH_STATE, FETCH_BEST_PICK, FETCH_TRENDING_FLAT, UPDATE_HOUSE_STACK } from './constants';
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
