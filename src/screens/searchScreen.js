import React from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, CheckBox, ListItem } from 'native-base';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { connect } from 'react-redux';
import { updateSearchState } from '../api/actions';

import { styles } from '../styles/style';
import { colors } from '../styles/color';
import HouseItem from '../components/houseItem.component';

const mapStateToProps = state => {
  return { search: state.app.search, tags: state.app.tags };
};

function mapDispatchToProps(dispatch) {
  return {
    updateSearchState: (query, tags) => dispatch(updateSearchState(query, tags))
  };
}

class SearchScreen extends React.Component {

  componentDidMount() {
    let tag = this.getTagAsArray(this.props.route.params.tag);
    let { query } = this.props.search;
    this.props.updateSearchState(query, tag);
  }

  changeQuery(query) {
    let tag = this.getTagAsArray(this.props.search.filterTags);
    this.props.updateSearchState(query, tag);
  }

  updateTagsFilter(item) {
    let tag = this.getTagAsArray(this.props.search.filterTags);
    let { query } = this.props.search;
    if (tag.includes(item))
      tag.splice(tag.indexOf(item), 1);
    else
      tag.push(item);
    this.props.updateSearchState(query, tag);
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
              <Input placeholder="Search" value={query} onChangeText={(text) => this.changeQuery(text)} />
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
                  return <HouseItem key={index} image={item.image} title={item.title} favourite={true} />
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
