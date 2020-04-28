import { CHANGE_APP_VIEW } from './constants';

export function changeAppView(view) {
  console.log('changeAppView > ',view);
  return { type: CHANGE_APP_VIEW, payload: view };
}
