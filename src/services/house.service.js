class HouseService {
  constructor() {
    this.bestPicks = [];
    this.trendingFlats = [];
    this.tags = ['Top seller', 'Trending', 'Kitchens', 'Houses', 'Apartments'];
  }

  /**
   * 
   * @param {boolean} indicator 
   * @param {*} bestPicks 
   * @param {*} trendingFlats 
   */
  homeApiDefinition(indicator, bestPicks, trendingFlats) {
    return {
      indicator: indicator,
      bestPicks: bestPicks,
      trendingFlats: trendingFlats
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
