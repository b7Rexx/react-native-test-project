import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Icon } from 'native-base';
import { styles } from '../styles/style';
import StorageServive from '../services/storage.service';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { favourites: state.app.favourites };
};

class HouseItem extends React.Component {

  image() {
    if (this.props.image)
      return <Image source={{ uri: this.props.image }} style={styles.houseCardImage} />;
  }

  favourite() {
    let favourite =     StorageServive.checkFavourite(this.props.favourites.list, this.props.favourite);
    if (favourite)
      return <Icon name='star' style={[styles.houseCardIcon, styles.houseCardIconFav]} />
    else
      return <Icon name='star-outline' style={styles.houseCardIcon} />
  }
  detail() {
    if (this.props.detail)
      return <Text style={styles.houseCardDetail}>{this.props.detail.substring(0, 60)} ...</Text>

  }

  render() {
    return (
      <Card style={styles.houseCard} transparent>
        <View style={styles.houseCardBody}>
          {this.image()}
          {this.favourite()}
        </View>
        <CardItem style={styles.houseCardTitle}>
          <Text style={styles.houseCardText}>{this.props.title || ''}</Text>
          {this.detail()}
        </CardItem>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(HouseItem);
