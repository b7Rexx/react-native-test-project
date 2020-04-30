import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardItem, Button, Icon } from 'native-base';
import { styles } from '../styles/style';
import { colors } from '../styles/color';

class CardView extends React.Component {

  detail() {
    if (this.props.image)
      return <Image source={{ uri: this.props.image }} style={styles.cardBodyImage} />;
  }

  footer() {
    if (this.props.footer) {
      return (
        <>
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Text style={styles.cardFooterTitle}>{this.props.footer.title || ''}</Text>
            <Text style={styles.cardFooterText}>{this.props.footer.detail || ''}</Text>
          </View>
          <Icon name='ios-arrow-round-forward' style={styles.cardFooterIcon} />
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
