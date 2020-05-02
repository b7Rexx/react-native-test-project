import React from 'react';
import { Text, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';
import { styles } from '../styles/style';
import { connect } from 'react-redux';
import { NAVIGATION } from '../api/constants';
import CardView from '../components/cardView.component';
import { fetchBestPicks, fetchTrendingFlats } from '../api/actions';

const mapStateToProps = state => {
  return { houses: state.app.houses, tags: state.app.tags }
};

function mapDispatchToProps(dispatch) {
  return {
    fetchBestPicks: () => dispatch(fetchBestPicks()),
    fetchTrendingFlats: () => dispatch(fetchTrendingFlats()),
  };
}

class HomeScreen extends React.Component {

  componentDidMount() {
    this.props.fetchBestPicks();
    this.props.fetchTrendingFlats();
  }

  renderBestPicks() {
    let { bestPicks } = this.props.houses;
    if (bestPicks.list.length > 0) {
      let item = bestPicks.list[0];
      let ImageURL = item.images[0];
      return <CardView title='Best picks' navigate={NAVIGATION.Search} image={ImageURL} navigateParams={NAVIGATION.bestPicks}
        footer={{ title: 'Smart houses', detail: bestPicks.list.length + ' houses and apartments' }} {...this.props}></CardView>
    }
  }


  renderTrendingFlats() {
    let { trendingFlats } = this.props.houses;
    if (trendingFlats.list.length > 0) {
      let item = trendingFlats.list[0];
      let ImageURL = item.images[0];
      return <CardView title='Trending Flats' navigate={NAVIGATION.Search} image={ImageURL} navigateParams={NAVIGATION.trendingFlats}
        footer={{ title: 'Smart houses', detail: trendingFlats.list.length + ' houses and apartments' }} {...this.props}></CardView>
    }
  }

  render() {
    let { bestPicks, trendingFlats } = this.props.houses;
    if (bestPicks.indicator && trendingFlats.indicator)
      return <ActivityIndicator style={styles.indicator} />

    return (
      <>
        <ScrollView style={styles.container}>
          {this.renderBestPicks()}
          <ScrollView style={styles.listButtonView} horizontal={true}>
            {this.props.tags.map((item, index) => {
              return <Button key={index} style={styles.listButton}><Text style={styles.listButtonText}>{item}</Text></Button>
            })}
          </ScrollView>
          {this.renderTrendingFlats()}
        </ScrollView>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
