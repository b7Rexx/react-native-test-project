import HouseService from './house.service';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { NAVIGATION } from '../api/constants';
import { getDistance } from 'geolib';
class SearchService {
  constructor() {
    this.tags = HouseService.tags;
  }

  initData() {
    return {
      query: '',
      filters: {
        priceLowValue: 1000,
        priceHighValue: 10000,
        tags: []
      },
      newFilters: {
        priceLowValue: 1000,
        priceHighValue: 10000,
        tags: []
      },
      list: []
    };
  } 

  errorMessage(status = false, message = '') {
    return {
      status: status,
      message: message
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
      list: list
    };
  }


  getGeolocationCurrentPosition() {
    return new Promise((res, rej) => {
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 })
        .then(() => {
          Geolocation.getCurrentPosition(
            position => {
              res(position.coords);
            },
            error => {
              rej('Location Error (getCurrentPosition) ', error.message)
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
          );
        }).catch(error => {
          rej('Location Error (getCurrentPosition)  ', error.message)
        });
    });
  }


  sortByGeolocation(houses, positionCoords) {
    console.log('positionCoords', positionCoords);
    if (!(positionCoords.latitude && positionCoords.longitude))
      return {
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
      list: result
    };
  }
}

export default new SearchService();
