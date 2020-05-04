import HouseService from './house.service';
import Geolocation from '@react-native-community/geolocation';
import { NAVIGATION } from '../api/constants';
import { getDistance } from 'geolib';
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
        list = houses.bestPicks;
        if (query !== '') {
          list = Object.values(houses.bestPicks).filter(item => {
            return item.location.includes(query);
          });
        }
        break;
      case NAVIGATION.trendingFlats:
        list = houses.trendingFlats;
        if (query !== '') {
          list = Object.values(houses.trendingFlats).filter(item => {
            return item.location.toLowerCase().includes(query.toLowerCase());
          });
        }
        break;
      case NAVIGATION.NearBy:
        list = houses.trendingFlats;
        if (query !== '') {
          list = Object.values(houses.trendingFlats).filter(item => {
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


  getGeolocationCurrentPosition() {
    return new Promise((res, rej) => {
      Geolocation.getCurrentPosition(
        position => {
          res(position.coords);
        },
        error => rej('Error getCurrentPosition  > ', error.message),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
      );

    });
  }


  sortByGeolocation(houses, positionCoords) {
    if (!(positionCoords.latitude && positionCoords.longitude))
      return {
        query: '',
        filterTags: [],
        list: []
      };
    let list = houses.trendingFlats
    Object.values(list).forEach(item => {
      item.geoDistance = getDistance(positionCoords, {
        latitude: item.coordinate[0],
        longitude: item.coordinate[1],
      })
    });

    var result = list.sort(function (a, b) {
      return parseFloat(a.geoDistance) - parseFloat(b.geoDistance);
    });
    return {
      query: '',
      filterTags: [],
      list: result
    };
  }
}

export default new SearchService();
