import React from 'react';
import { Text, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Button } from 'native-base';
import { styles } from '../styles/style';
import { connect } from 'react-redux';
import { NAVIGATION } from '../api/constants';
import CardView from '../components/cardView.component';
import { fetchHomeApi, resetRefreshHome } from '../api/actions';

const mapStateToProps = state => {
  return { houses: state.app.houses, tags: state.app.tags }
};

function mapDispatchToProps(dispatch) {
  return {
    resetRefreshHome: (value) => dispatch(resetRefreshHome(value)),
    fetchHomeApi: () => dispatch(fetchHomeApi()),
  };
}

class HomeScreen extends React.Component {

  componentDidMount() {
    this.props.fetchHomeApi();
  }

  renderBestPicks() {
    let { bestPicks } = this.props.houses;
    if (bestPicks.length > 0) {
      let item = bestPicks[0];
      let ImageURL = item.images[0];
      return <CardView title='Best picks' navigate={NAVIGATION.Search} image={ImageURL} navigateParams={NAVIGATION.bestPicks}
        footer={{ title: 'Smart houses', detail: bestPicks.length + ' houses and apartments' }} {...this.props}></CardView>
    }
  }


  renderTrendingFlats() {
    let { trendingFlats } = this.props.houses;
    if (trendingFlats.length > 0) {
      let item = trendingFlats[0];
      let ImageURL = item.images[0];
      return <CardView title='Trending Flats' navigate={NAVIGATION.Search} image={ImageURL} navigateParams={NAVIGATION.trendingFlats}
        footer={{ title: 'Smart houses', detail: trendingFlats.length + ' houses and apartments' }} {...this.props}></CardView>
    }
  }

  onRefresh() {
    this.props.resetRefreshHome(true);
    this.props.fetchHomeApi();
  }

  render() {
    let { refreshing, indicator } = this.props.houses;
    if (indicator)
      return <ActivityIndicator style={styles.indicator} size='large' />
      

    return (
      <>
        <ScrollView style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }>
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
