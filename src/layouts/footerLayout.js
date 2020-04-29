import React, { Component } from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import { layouts } from '../styles/layout.css';
export default class FooterLayout extends Component {
  render() {
    return (
      <>
        <Footer style={layouts.footer}>
          <FooterTab style={layouts.footerTab}>
            <Button full>
              <Text style={layouts.footerText}>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </>
    );
  }
}
