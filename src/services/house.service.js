class HouseService {
  constructor() {
    this.bestPicks = [];
    this.trendingFlats = [];
    this.tags = [
      "single room",
      "flat",
      "flats",
      "house with tv",
      "flat with sofa",
      "yellow",
      "yellow flat",
      "balcony",
    ];
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
