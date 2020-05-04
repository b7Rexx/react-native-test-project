import React from 'react';
import { ScrollView, View, TouchableOpacity, RefreshControl, Dimensions } from 'react-native';
import { Container, Header, Item, Input, Icon, Text, CheckBox, ListItem } from 'native-base';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { connect } from 'react-redux';

import { NAVIGATION } from '../api/constants';
import { styles } from '../styles/style';
import { colors } from '../styles/color';
import HouseItem from '../components/houseItem.component';
import SliderSelect from '../components/sliderSelect.component';
import { updateSearchState, updateHouseDetailStack, resetRefreshSearch, searchByGeoLocation, onChangePriceSlider } from '../api/actions';

const mapStateToProps = state => {
  return { houses: state.app.houses, search: state.app.search, tags: state.app.tags };
};

function mapDispatchToProps(dispatch) {
  return {
    searchByGeoLocation: () => dispatch(searchByGeoLocation()),
    resetRefreshSearch: (value) => dispatch(resetRefreshSearch(value)),
    updateSearchState: (params, query, options = {}) => dispatch(updateSearchState(params, query, options)),
    updateHouseDetailStack: (item) => dispatch(updateHouseDetailStack(item)),
    onChangePriceSlider: (low, high) => dispatch(onChangePriceSlider(low, high))
  };
}

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props.route;
    this.params = params;
    this.priceLowValue = this.props.search.filters.priceLowValue;
    this.priceHighValue = this.props.search.filters.priceHighValue;
    this.sliderSetting = {
      min: 1000, max: 10000, step: 100,
      initialLowValue: this.priceLowValue, initialHighValue: this.priceHighValue,
      onValueChanged: (low, high) => this.onValueChanged(low, high)
    };
  }
  componentDidMount() {
    if (this.params.searchSwitch === NAVIGATION.NearBy)
      this.props.searchByGeoLocation();
    else
      this.props.updateSearchState(this.params, '');
  }

  changeQuery(query) {
    this.props.updateSearchState(this.params, query);
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
    let { filters } = this.props.search;
    return (
      <View style={styles.searchFilter}>
        <Text style={styles.searchFilterTitle}>Filter</Text>

        <View style={styles.searchFilter}>
          <View style={styles.searchFilterBox}>
            <Text style={styles.searchFilterTitle}>Price</Text>
            <Text style={styles.searchFilterValue}>${this.priceLowValue} - ${this.priceHighValue}</Text>
          </View>
          <SliderSelect options={this.sliderSetting} />
        </View>
        <View style={styles.searchFilter}>
        <Text style={styles.searchFilterTitle}>Tags</Text>
          <View style={[styles.searchFilterBox, { flexWrap: 'wrap' }]}>
            {this.props.tags.map((item, index) => {
              return (
                <Item key={index} style={styles.searchFilterTags}>
                  <CheckBox checked={filters.tags.includes(item)} color={colors.primaryColor} onPress={() => this.updateTagsFilter(item)} />
                  <Text> {item}</Text>
                </Item>
              );
            })}
          </View>
        </View>
      </View>
    );
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
            <HouseItem image={item.images[0]} title={item.location} detail={item.info} />
          </TouchableOpacity>)
        })}
      </>);
    }
  }


  onValueChanged(low, high) {
    this.props.onChangePriceSlider(low, high);
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
