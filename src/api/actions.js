import { CHANGE_APP_VIEW, UPDATE_SEARCH_STATE } from './constants';

export function changeAppView(view) {
  return { type: CHANGE_APP_VIEW, payload: view };
}

export function updateSearchState(query, tags) {
  console.log(query,tags);
  return { type: UPDATE_SEARCH_STATE, payload: { query: query, tags: tags } };
}
