import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import { styles } from '../styles/style';

class CardView extends React.Component {

  detail() {
    if (this.props.image)
      return <Image source={{ uri: this.props.image }} style={styles.cardBodyImage} />;
  }

  footer() {
    if (this.props.footer) {
      return (
        <>
          <Text style={styles.cardFooterTitle}>{this.props.footer.title || ''}</Text>
          <Text style={styles.cardFooterText}>{this.props.footer.detail || ''}</Text>
        </>
      );
    }
  }

  render() {
    return (
      <Card style={styles.card} transparent>
        <CardItem style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>{this.props.title || ''}</Text>
        </CardItem>
        <View style={styles.cardBody}>
          {this.detail()}
        </View>
        <Button style={styles.cardFooter} onPress={() => this.props.navigation.navigate(this.props.navigate)}>
          {this.footer()}
        </Button>
      </Card>
    );
  }
}

export default CardView;
