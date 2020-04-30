class HouseService {

  constructor() {
    this.init();
  }

  init() {
    this.tags = ['Top seller', 'Trending', 'Kitchens', 'Houses', 'Apartments'];

    this.list = [
      { title: 'Test1', detail: 'detail2', image: 'https://www.meroproperty.com/files/properties/hot-property-on-sale-hurry.jpg', tags: ['Kitchens', 'Houses'] },
      { title: 'Test2', detail: 'detail1', image: 'https://www.meroproperty.com/files/properties/hot-property-on-sale-hurry.jpg', tags: ['Kitchens', 'Apartments'] },
      { title: 'Test3', detail: 'detail3', image: 'https://www.meroproperty.com/files/properties/hot-property-on-sale-hurry.jpg', tags: ['Trending', 'Houses'] },
      { title: 'Test4', detail: 'detail4', image: 'https://www.meroproperty.com/files/properties/hot-property-on-sale-hurry.jpg', tags: ['Top Seller', 'Apartments'] },
    ];
  }
}

export default new HouseService();
