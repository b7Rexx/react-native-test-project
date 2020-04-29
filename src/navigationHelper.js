import React from 'react';
import { Button, Icon } from 'native-base';
import { NAVIGATION } from './api/constants';
import { layouts } from './styles/layout';
import { styles } from './styles/style';
import { colors } from './styles/color';

/**
 * 
 * @param {*} props with navigation 
 * @param {*|null|'drawer'} headerLeft 
 * @param {*|null|'search'} headerLeft 
 * @returns {*} stackOptions 
 */
export function generateStackOptions(props, header = false, headerLeft = null, headerRight = null) {
  let stackOptions = {
    headerShown: header,
    headerStyle: layouts.header,
    headerTitleStyle: layouts.headerText
  };
  if (headerLeft === 'drawer') {
    stackOptions.headerLeft = () => (
      <Button transparent onPress={() => props.navigation.toggleDrawer()}><Icon name='menu' style={styles.icon} /></Button>
    );
  }
  if (headerRight === 'search') {
    stackOptions.headerRight = () => (
      <Button transparent onPress={() => props.navigation.navigate(NAVIGATION.Search)}><Icon name='search' style={styles.icon} /></Button>
    );
  }
  return stackOptions;
}

/**
 * 
 * @param {*} icon 
 * @returns {*} tabOptions 
 */
export function generateTabOptions(icon) {
  let tabOptions = {
    tabBarIcon: ({ focused }) => {
      if (!focused)
        return <Icon name={icon} />;
      else
        return <Icon name={icon} style={{ color: colors.accentColor }} />;
    }
  };
  return tabOptions;
}
