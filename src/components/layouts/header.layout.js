import React, { Component } from 'react';
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';
import { layouts } from "../../styles/layout.css";
import { styles } from '../../styles/style.css';
import { colors } from '../../styles/color.css';

export default class HeaderLayout extends Component {
  render() {
    return (
      <>
        <Header style={layouts.header} androidStatusBarColor={colors.darkPrimaryColor}>
          <Left>
            <Button transparent>
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
