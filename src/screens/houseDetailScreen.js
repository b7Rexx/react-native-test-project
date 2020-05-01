import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import { styles } from '../styles/style';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {}
};

function mapDispatchToProps(dispatch) {
  return {
  };
}

class HouseDetailScreen extends React.Component {

  render() {
    return (
      <>
        <Text>House Detail</Text>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetailScreen);
