import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { styles } from '../styles/style';

class CircularIcon extends React.Component {

  render() {
    return (
      <View>
        <Icon name={this.props.icon} style={[styles.circularIcon, { color: this.props.color }]} />
        <Text style={styles.iconText}>{this.props.text}</Text>
      </View>
    );
  }
}

export default CircularIcon;
