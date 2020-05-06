import React from 'react';
import { ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles/style';
import HouseItem from '../components/houseItem.component';
import StorageService from '../services/storage.service';
import { resetRefreshFavourite,updateHouseDetailStack } from '../api/actions';
import { NAVIGATION } from '../api/constants';

const mapStateToProps = state => {
  return {
    houses: state.app.houses.trendingFlats,
    favourites: state.app.favourites,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    resetRefreshFavourite: () => dispatch(resetRefreshFavourite()),
    updateHouseDetailStack: (item) => dispatch(updateHouseDetailStack(item)),
  };
}

class FavouriteScreen extends React.Component {

  onRefresh() {
    this.props.resetRefreshFavourite(true);
  }

  setDetailStack(item) {
    this.props.updateHouseDetailStack(item);
    this.props.navigation.navigate(NAVIGATION.HouseDetail);
  }

  render() {
    let { refreshing, list } = this.props.favourites;
    let items = StorageService.getItems(this.props.houses, list);

    return (
      <ScrollView style={styles.listSearchView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }>

        {items.map((item, index) => {
          return (<TouchableOpacity key={index} onPress={() => {
            this.setDetailStack(item)
          }}>
            <HouseItem favourite={item.id} image={item.images[0]} title={item.location} detail={item.info} />
          </TouchableOpacity>)
        })}
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteScreen);
