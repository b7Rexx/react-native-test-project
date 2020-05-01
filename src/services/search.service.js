import HouseService from './house.service';
import { NAVIGATION } from '../api/constants';
class SearchService {
  constructor() {
    this.tags = HouseService.tags;
  }

  initData() {
    return {
      query: '',
      filterTags: [],
      list: []
    };
  }

  updateSearchList(houses, params, query, options) {
    let list = [];
    switch (params.searchSwitch) {
      case NAVIGATION.bestPicks:
        list = houses.bestPicks.list;  
        if (query !== '') {
          list = Object.values(houses.bestPicks.list).filter(item => {
            return item.location.includes(query);
          });
        }
        break;
      case NAVIGATION.trendingFlats:
        list = houses.trendingFlats.list;
        if (query !== '') {
          list = Object.values(houses.trendingFlats.list).filter(item => {
            return item.location.toLowerCase().includes(query.toLowerCase());
          });
        }
        break;
      default:
        break;
    }

    return {
      query: query,
      filterTags: [],
      list: list
    };
  }
}

export default new SearchService();
