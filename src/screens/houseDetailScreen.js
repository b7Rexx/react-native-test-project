import React from 'react';
import { Text, View, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../styles/style';
import { connect } from 'react-redux';
import HouseTitleView from '../components/houseTitleView.component';
import CircularIcon from '../components/circularIcon.component';
import LightIcon from '../components/lightIcon.component';
import CircularButton from '../components/circularButton.component';
import { colors } from '../styles/color';
const mapStateToProps = state => {
  return {
    houseDetailStack: state.app.houseDetailStack
  }
};


class HouseDetailScreen extends React.Component {

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
        <HouseTitleView title={detail.Currency + ' ' + detail.priceMax} location={detail.location}
          transport={detail.transport} safety={detail.safety} ecology={detail.ecology}
        />
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 }}>
            <CircularIcon text='Map View' icon='bus' color='blue' />
            <CircularIcon text='Transport' icon='bus' color='purple' />
            <CircularIcon text='Safety' icon='bus' color='#f0fc' />
            <CircularIcon text='Ecology' icon='bus' color='lightblue' />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 10 }}>
            <LightIcon text={detail.bed + ' Bed'} icon='bed' />
            <LightIcon text={detail.bathRoom + ' Bathroom'} icon='bus' />
            <LightIcon text={detail.area} icon='bus' />
          </View>
          <Text style={styles.houseDetailInfo}>{detail.info}</Text>
        </ScrollView>
        <LinearGradient colors={['transparent', 'whitesmoke']} style={styles.houseDetailFooter}>
          <CircularButton text='CONTACT' bgColor='white'></CircularButton>
          <CircularButton text='BOOK' color='white' bgColor={colors.accentColor}></CircularButton>
        </LinearGradient>
      </>
    );
  }
}

export default connect(mapStateToProps)(HouseDetailScreen);
