import React from 'react';
import { ScrollView, View, TouchableOpacity, RefreshControl, Dimensions } from 'react-native';
import { Container, Header, Item, Input, Icon, Text } from 'native-base';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { connect } from 'react-redux';

import { NAVIGATION } from '../api/constants';
import { styles } from '../styles/style';
import HouseItem from '../components/houseItem.component';
import FilterScreen from './filterScreen';
import StorageServive from '../services/storage.service';
import { updateSearchState, updateHouseDetailStack, resetRefreshSearch, searchByGeoLocation, onQueryChange } from '../api/actions';

const mapStateToProps = state => {
  return { houses: state.app.houses, search: state.app.search, tags: state.app.tags, favourite: state.app.favourites.list };
};

function mapDispatchToProps(dispatch) {
  return {
    searchByGeoLocation: (params) => dispatch(searchByGeoLocation(params)),
    resetRefreshSearch: (value) => dispatch(resetRefreshSearch(value)),
    updateSearchState: (params) => dispatch(updateSearchState(params)),
    onQueryChange: (query) => dispatch(onQueryChange(query)),
    updateHouseDetailStack: (item) => dispatch(updateHouseDetailStack(item)),
  };
}

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props.route;
    this.params = params;
  }

  componentDidMount() {
    if (this.params.searchSwitch === NAVIGATION.NearBy)
      this.props.searchByGeoLocation(this.params);
    else
      this.props.updateSearchState(this.params);
  }

  changeQuery(query) {
    this.props.onQueryChange(query);
  }

  setDetailStack(item) {
    this.props.updateHouseDetailStack(item);
    this.props.navigation.navigate(NAVIGATION.HouseDetail)
  }

  toggleFilter() {
    let drawer = this.refs['DRAWER'];
    if (drawer._drawerShown)
      drawer.closeDrawer();
    else
      drawer.openDrawer();
  }

  renderDrawer = () => {
    return <FilterScreen onApply={() => { this.refs['DRAWER'].closeDrawer() }} />;
  };

  onRefresh() {
    this.props.resetRefreshSearch(true);
    if (this.params.searchSwitch === NAVIGATION.NearBy)
      this.props.searchByGeoLocation();
    else
      this.props.updateSearchState(this.params, '');
  }

  errorCheck() {
    let { error, list } = this.props.search;
    if (error.status) {
      return (<>
        <Text>{error.message}</Text>
      </>);
    }
    else {
      return (<>
        {list.map((item, index) => {
          return (<TouchableOpacity key={index} onPress={() => {
            this.setDetailStack(item)
          }}>
            <HouseItem favourite={StorageServive.checkFavourite(this.props.favourite, item.id)} image={item.images[0]} title={item.location} detail={item.info} />
          </TouchableOpacity>)
        })}
      </>);
    }
  }

  render() {
    const dimensions = Dimensions.get("screen");
    let { refreshing, query } = this.props.search;

    return (
      <>
        <Container>
          <Header searchBar style={styles.searchBar}>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Type address, city, postal" placeholderTextColor={'lightgrey'} value={query} onChangeText={(text) => this.changeQuery(text)} />
              <Icon name="ios-funnel" onPress={() => this.toggleFilter()} />
            </Item>
          </Header>
          <View style={{ flex: 1 }}>
            <DrawerLayout
              drawerWidth={dimensions.width}
              ref={'DRAWER'}
              drawerPosition={DrawerLayout.positions.Right}
              drawerType='slide'
              drawerBackgroundColor="#fff"
              renderNavigationView={this.renderDrawer}>

              <ScrollView style={styles.listSearchView}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={this.onRefresh.bind(this)}
                  />
                }>
                {this.errorCheck()}
              </ScrollView>
            </DrawerLayout>
          </View>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
