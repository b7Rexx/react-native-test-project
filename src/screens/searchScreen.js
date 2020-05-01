import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, CheckBox, ListItem } from 'native-base';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { connect } from 'react-redux';
import { updateSearchState } from '../api/actions';

import { styles } from '../styles/style';
import { colors } from '../styles/color';
import HouseItem from '../components/houseItem.component';
import { NAVIGATION } from '../api/constants';

const mapStateToProps = state => {
  return { houses: state.app.houses, search: state.app.search, tags: state.app.tags };
};

function mapDispatchToProps(dispatch) {
  return {
    updateSearchState: (params, query, options = {}) => dispatch(updateSearchState(params, query, options))
  };
}

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props.route;
    this.params = params;
  }
  componentDidMount() {
    this.props.updateSearchState(this.params, '');
  }

  changeQuery(query) {
    this.props.updateSearchState(this.params, query);
  }

  updateTagsFilter(item) {
    let tag = this.getTagAsArray(this.props.search.filterTags);
    // let { query } = this.props.search;
    if (tag.includes(item))
      tag.splice(tag.indexOf(item), 1);
    else
      tag.push(item);
    // this.props.updateSearchState(query, tag);
  }

  getTagAsArray(tag) {
    if (Array.isArray(tag)) return tag;
    else return [tag];
  }

  openFilter() {
    this.refs['DRAWER'].openDrawer();
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

  render() {
    let { query, list } = this.props.search;
    return (
      <>
        <Container>
          <Header searchBar style={styles.searchBar}>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Type address, city, postal" placeholderTextColor={'lightgrey'} value={query} onChangeText={(text) => this.changeQuery(text)} />
              <Icon name="ios-funnel" onPress={() => this.openFilter()} />
            </Item>
          </Header>
          <View style={{ flex: 1 }}>
            <DrawerLayout
              drawerWidth={200}
              ref={'DRAWER'}
              drawerPosition={DrawerLayout.positions.Right}
              drawerType='slide'
              drawerBackgroundColor="#fff"
              renderNavigationView={this.renderDrawer}>

              <ScrollView style={styles.listSearchView} >
                {list.map((item, index) => {
                  return (<TouchableOpacity key={index} onPress={() => {
                    this.props.navigation.navigate(NAVIGATION.HouseDetail, { item: item })
                  }}>
                    <HouseItem image={item.images[0]} title={item.location} detail={item.info} />
                  </TouchableOpacity>)
                })}
              </ScrollView>

            </DrawerLayout>
          </View>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
