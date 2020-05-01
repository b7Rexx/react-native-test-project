import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../styles/color';
import { styles } from '../styles/style';

class CircularButton extends React.Component {

  render() {
    return (
      <>
        <TouchableOpacity style={{ backgroundColor: this.props.bgColor || 'white', borderRadius: 50, marginBottom: 25,marginTop: 10}}>
          <Text style={[{ color: this.props.color || colors.primaryColor }, styles.circularButtonText]}>
            {this.props.text}</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default CircularButton;
