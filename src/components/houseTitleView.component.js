import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { styles } from '../styles/style';

class HouseTitleView extends React.Component {
  render() {
    return (
      <>
        <View style={styles.houseDetailTitle}>
          <Text style={styles.houseDetailPrice}>{this.props.title}</Text>
          <Text style={styles.houseDetailLocation}> {this.props.location}</Text>

          <Icon name='bus' style={styles.TitleTransportIcon}/>
            <Text style={styles.TitleTransportText}>{this.props.transport}</Text>

          <Icon name='bus' style={styles.TitleSafetyIcon}/>
            <Text style={styles.TitleSafetyText}>{this.props.safety}</Text>

          <Icon name='bus' style={styles.TitleEcologyIcon}/>
            <Text style={styles.TitleEcologyText}>{this.props.ecology}</Text>

        </View>
      </>
    );
  }
}

export default HouseTitleView;
