import HouseService from './house.service';
class SearchService {
  constructor() {
    this.list = HouseService.list;
    this.tags = HouseService.tags;
  }

  initData() {
    return {
      query: '',
      filterTags: [],
      list: this.list
    };
  }

  updateSearchList(query, tags) {
    let list = Object.values(this.list).filter(item => {

      let matchTags = Object.values(tags).filter(tag => {
        return item.tags.includes(tag);
      })
      return matchTags.length > 0;
    });

    // load all list if empty tags matched
    if (list.length == 0) list = this.list;

    if (query !== '') {
      list = Object.values(list).filter(item => {
        return !(!item.title.includes(query) && !item.detail.includes(query));
      });
    }

    return {
      query: query,
      filterTags: tags,
      list: list
    };
  }
}

export default new SearchService();
