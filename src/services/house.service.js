class HouseService {
  constructor() {
    this.bestPicks = [];
    this.trendingFlats = [];
    this.tags = ['Top seller', 'Trending', 'Kitchens', 'Houses', 'Apartments'];
  }

  /**
   * 
   * @param {boolean} indicator 
   * @param {Array} list 
   */
  bestPickDefinition(indicator, list) {
    return {
      indicator: indicator,
      list: list
    };
  }

  /**
 * 
 * @param {boolean} indicator 
 * @param {Array} list 
 */
  trendingFlatDefinition(indicator, list) {
    return {
      indicator: indicator,
      list: list
    };
  }


  /**
   * Modify house detail stack
   * @param {*} house 
   */
  houseStackDefintion(house, indicator = true) {
    return {
      indicator: indicator,
      detail: house
    };
  }
}

export default new HouseService();
