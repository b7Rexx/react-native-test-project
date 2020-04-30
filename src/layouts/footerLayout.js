import React, { Component } from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import { styles } from '../styles/style';
export default class FooterLayout extends Component {
  render() {
    return (
      <>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTab}>
            <Button full>
              <Text style={styles.footerText}>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </>
    );
  }
}
