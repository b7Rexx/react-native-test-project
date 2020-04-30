import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Container, Button } from 'native-base';
import { styles } from '../styles/style';
import { connect } from 'react-redux';
import { NO_IMAGE, NAVIGATION } from '../api/constants';
import CardView from '../components/cardView.component';

const mapStateToProps = state => {
  return { houses: state.app.houses, tags: state.app.tags }
};

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    let { list } = this.props.houses;
    this.list = list;
  }

  /**
   * generate cardView with respect to tagName and navigation
   * @param {*} tagName 
   * @param {*} tagFooter 
   * @param {*} navigate 
   */
  cardViewByTag(tagName, tagFooter, navigate) {
    let ImageURL = NO_IMAGE;
    let trendingItem = this.list.filter(item => {
      return item.tags.includes(tagName);
    });
    if (trendingItem.length > 0) {
      ImageURL = trendingItem[0].image;
      return (
        <CardView title={tagName} navigate={navigate} image={ImageURL}
          footer={{ title: tagFooter, detail: trendingItem.length + ' houses and apartments' }} {...this.props}></CardView>
      );
    }
  }

  render() {
    let ImageURL = NO_IMAGE;
    if (this.list[0] !== undefined) ImageURL = this.list[0].image;

    return (
      <>
        <ScrollView style={styles.container}>
          <CardView title='Best picks' navigate={NAVIGATION.Search} image={ImageURL}
            footer={{ title: 'Smart houses', detail: this.list.length + ' houses and apartments' }} {...this.props}></CardView>
          <ScrollView style={styles.listButtonView} horizontal={true}>
            {this.props.tags.map((item, index) => {
              return <Button key={index} style={styles.listButton}><Text style={styles.listButtonText}>{item}</Text></Button>
            })}
          </ScrollView>
          {this.cardViewByTag('Trending', 'Trending Apartments', NAVIGATION.Search)}
          {this.cardViewByTag('Top Seller', 'Top Seller Houses', NAVIGATION.Search)}
        </ScrollView>
      </>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);
