import React from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { styles } from '../styles/style';
import { colors } from '../styles/color';

class HeaderLayout extends React.Component {
  render() {
    return (
      <>
        <Header style={styles.header} androidStatusBarColor={colors.darkPrimaryColor}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' style={styles.icon} />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </>
    );
  }
}

export default HeaderLayout;
