import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { styles } from '../styles/style';

class LightIcon extends React.Component {

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name={this.props.icon} style={[styles.lightIcon, { color: this.props.color }]} >
          <Text style={[styles.iconText, { fontSize: 12 }]}> {this.props.text}</Text>
        </Icon>
      </View>
    );
  }
}

export default LightIcon;
