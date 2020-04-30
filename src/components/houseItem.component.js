import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardItem, Icon } from 'native-base';
import { styles } from '../styles/style';

class HouseItem extends React.Component {

  detail() {
    if (this.props.image)
      return <Image source={{ uri: this.props.image }} style={styles.houseCardImage} />;
  }

  render() {
    return (
      <Card style={styles.houseCard} transparent>
        <View style={styles.houseCardBody}>
          {this.detail()}
          <Icon name='star-outline' style={[styles.houseCardIcon, (this.props.favourite ? styles.houseCardIconFav : {})]} />
        </View>
        <CardItem style={styles.houseCardTitle}>
          <Text style={styles.houseCardText}>{this.props.title || ''}</Text>
        </CardItem>
      </Card>
    );
  }
}

export default HouseItem;
