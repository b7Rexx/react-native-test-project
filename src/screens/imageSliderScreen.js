import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/style';
import { connect } from 'react-redux';
// import { SliderBox } from "react-native-image-slider-box";
import ImageSlider from 'react-native-image-slider';
import HouseTitleView from '../components/houseTitleView.component';

const mapStateToProps = state => {
  return {
    houseDetailStack: state.app.houseDetailStack
  }
};

class ImageSliderScreen extends React.Component {

  render() {
    let { detail } = this.props.houseDetailStack;

    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={styles.sliderTitle}>
            <HouseTitleView title={detail.Currency + ' ' + detail.priceMax} location={detail.location}
              transport={detail.transport} safety={detail.safety} ecology={detail.ecology}
            />
          </View>
          {/* <SliderBox images={detail.images} sliderBoxHeight={'100%'} /> */}
          <ImageSlider images={detail.images} />
        </View>
      </>
    );
  }
}

export default connect(mapStateToProps)(ImageSliderScreen);
