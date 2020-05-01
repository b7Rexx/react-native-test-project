import React from 'react';
import { Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { styles } from '../styles/style';
import { connect } from 'react-redux';
import { updateHouseDetailStack } from '../api/actions';
const mapStateToProps = state => {
  return {
    houseDetailStack: state.app.houseDetailStack
  }
};

function mapDispatchToProps(dispatch) {
  return {
    updateHouseDetailStack: (houseItem) => dispatch(updateHouseDetailStack(houseItem)),
  };
}

class HouseDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props.route;
    this.params = params;
  }

  componentDidMount() {
    // UPDATE_HOUSE_STATE
    this.props.updateHouseDetailStack(this.params.item);

  }

  image() {
    let { detail } = this.props.houseDetailStack;
    return <Image source={{ uri: detail.images[0] }} style={styles.houseDetailImage} />;
  }

  render() {
    let { houseDetailStack } = this.props;
    let { detail } = this.props.houseDetailStack;

    if (houseDetailStack.indicator)
      return <ActivityIndicator style={styles.indicator} />

    return (
      <>
        <View style={styles.houseDetailView}>
          {this.image()}
          <TouchableOpacity style={[styles.houseDetailButtonOverlay, styles.houseDetailButtonBack]}
            onPress={() => { this.props.navigation.goBack() }}>
            <Icon name='ios-arrow-round-back' style={styles.houseDetailIconOverlay} /></TouchableOpacity>
          <TouchableOpacity style={[styles.houseDetailButtonOverlay, styles.houseDetailButtonFav]}><Icon name='star-outline' style={styles.houseDetailIconOverlay} /></TouchableOpacity>
          <TouchableOpacity style={[styles.houseDetailButtonOverlay, styles.houseDetailButtonEllipse]}><Icon name='ellipsis-v' style={styles.houseDetailIconOverlay} /></TouchableOpacity>
        </View>
        <View style={styles.houseDetailTitle}>
          <Text style={styles.houseDetailPrice}>{detail.Currency} {detail.priceMax}</Text>
          <Text style={styles.houseDetailLocation}> {detail.location}</Text>
        </View>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetailScreen);
