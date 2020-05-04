import React from 'react';
import { ScrollView, View, TouchableOpacity, RefreshControl, Dimensions } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, CheckBox, ListItem } from 'native-base';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { connect } from 'react-redux';
import { updateSearchState, updateHouseDetailStack, resetRefreshSearch, searchByGeoLocation } from '../api/actions';

import { styles } from '../styles/style';
import { colors } from '../styles/color';
import HouseItem from '../components/houseItem.component';
import { NAVIGATION } from '../api/constants';

const mapStateToProps = state => {
  return { houses: state.app.houses, search: state.app.search, tags: state.app.tags };
};

function mapDispatchToProps(dispatch) {
  return {
    searchByGeoLocation: () => dispatch(searchByGeoLocation()),
    resetRefreshSearch: (value) => dispatch(resetRefreshSearch(value)),
    updateSearchState: (params, query, options = {}) => dispatch(updateSearchState(params, query, options)),
    updateHouseDetailStack: (item) => dispatch(updateHouseDetailStack(item))
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
    this.refs['DRAWER'].closeDrawer();
  }

  renderDrawer = () => {
    let { filterTags } = this.props.search;
    return (
      <View>
        <Text>Filter</Text>
        {this.props.tags.map((item, index) => {
          return (<ListItem key={index}>
            <CheckBox checked={filterTags.includes(item)} color={colors.primaryColor} onPress={() => this.updateTagsFilter(item)} />
            <Text> {item}</Text>
          </ListItem>);
        })}
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
