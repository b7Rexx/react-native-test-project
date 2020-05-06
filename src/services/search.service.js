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

  updateSearchList(houseState, searchState, filter = false) {
    let list = [];
    switch (searchState.searchSwitch) {
      case NAVIGATION.bestPicks:
        list = houseState.bestPicks;
        break;
      case NAVIGATION.trendingFlats:
        list = houseState.trendingFlats;
        break;
      case NAVIGATION.NearBy:
        list = houseState.NearBy;
        break;
      default:
        break;
    }

    if (filter) {
      list = Object.values(list).filter(item => {
        let flag = true;
        if (searchState.query != '') {
          console.log('0 > ', flag);
          flag = item.location.includes(searchState.query);
          console.log('1 > ', flag);
        }

        if (flag)
          flag = (searchState.filters.priceLowValue < item.priceMin
            && searchState.filters.priceHighValue > item.priceMax);

        if (flag) {
          flag = searchState.filters.tags.reduce((result, tag) => {
            return result && item.tags.includes(tag);
          }, flag);
        }

        return flag;
      });
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
    return result;
  }
}

export default new SearchService();
