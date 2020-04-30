import { DEFAULT_APP_VIEW, CHANGE_APP_VIEW } from "../api/constants";

const initialState = {
  view: DEFAULT_APP_VIEW,
  houses: {
    list: [
      { title: 'Test1', detail: 'detail1', image: 'https://www.meroproperty.com/files/properties/hot-property-on-sale-hurry.jpg', tags: ['Kitchens', 'Houses'] },
      { title: 'Test2', detail: 'detail2', image: 'https://www.meroproperty.com/files/properties/hot-property-on-sale-hurry.jpg', tags: ['Kitchens', 'Apartments'] },
      { title: 'Test3', detail: 'detail3', image: 'https://www.meroproperty.com/files/properties/hot-property-on-sale-hurry.jpg', tags: ['Trending', 'Houses'] },
      { title: 'Test4', detail: 'detail4', image: 'https://www.meroproperty.com/files/properties/hot-property-on-sale-hurry.jpg', tags: ['Top Seller', 'Apartments'] },
    ],
  },
  tags: ['Top seller', 'Trending', 'Kitchens', 'Houses', 'Apartments']
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_VIEW:
      return {
        ...state,
        view: action.payload
      };
    default:
      return state;
  }
}
export default appReducer;
