// import AsyncStorage from '@react-native-community/async-storage';
class StorageService {

  // setFavourite(items) {
  //   let arrayString = JSON.stringify(items);
  //   AsyncStorage.setItem('favourites', arrayString);
  // }

  // getFavourite() {
  //   return AsyncStorage.getItem('favourites');
  // }

  toggleFavourite(favList, item) {
    let arrayList = [];
    if (favList != null)
      arrayList = favList;
    //   arrayList = JSON.parse(favList);

    if (arrayList.indexOf(item) === -1)
      arrayList.push(item);
    else
      arrayList.splice(arrayList.indexOf(item), 1);
    // this.setFavourite(arrayList);

    return arrayList;
  }

  checkFavourite(favList, item) {
    return favList.includes(item);
  }

  getItems(houses, list) {
    return houses.filter(item => {
      return list.includes(item.id);
    });
  }

}

export default new StorageService();
