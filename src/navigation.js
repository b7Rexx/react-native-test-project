import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { generateStackOptions, generateTabOptions } from './navigationHelper';

import { NAVIGATION } from './api/constants';
import { colors } from './styles/color';

import HomeScreen from './screens/homeScreen';
import SearchScreen from './screens/searchScreen';
import HouseDetailScreen from './screens/houseDetailScreen';
import imageSliderScreen from './screens/imageSliderScreen';


const DiscoveryStack = createStackNavigator();
const NearByStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HouseDetailStack = createStackNavigator();

export function DiscoveryStackNavigation(props) {
  return (
    <>
      <DiscoveryStack.Navigator>
        <DiscoveryStack.Screen name={NAVIGATION.Home} component={HomeScreen} options={generateStackOptions(props, false)} />
        <DiscoveryStack.Screen name={NAVIGATION.Search} component={SearchScreen} options={generateStackOptions(props, false)} />
      </DiscoveryStack.Navigator>
    </>
  );
}

export function NearByStackNavigation(props) {
  return (
    <>
      <NearByStack.Navigator>
        <NearByStack.Screen name={NAVIGATION.NearBy} component={SearchScreen}
          initialParams={{ searchSwitch: NAVIGATION.NearBy }} options={generateStackOptions(props, false)} />
      </NearByStack.Navigator>
    </>
  );
}

export function HouseDetailStackNavigation(props) {
  return (
    <>
      <HouseDetailStack.Navigator >
        <HouseDetailStack.Screen name={NAVIGATION.HouseDetail} component={HouseDetailScreen} options={generateStackOptions(props, false)} />
        <HouseDetailStack.Screen name={NAVIGATION.ImageSlider} component={imageSliderScreen} options={generateStackOptions(props, false)} />
      </HouseDetailStack.Navigator>
    </>
  );
}

export function BottomTabNavigation() {
  return (
    <Tab.Navigator initialRouteName={NAVIGATION.Discovery}
      tabBarOptions={{ activeTintColor: colors.accentColor, inactiveTintColor: colors.secondaryText }}>
      <Tab.Screen name={NAVIGATION.Nearby} component={NearByStackNavigation} options={generateTabOptions('map')} />
      <Tab.Screen name={NAVIGATION.Discovery} component={DiscoveryStackNavigation} options={generateTabOptions('compass')} />
      <Tab.Screen name={NAVIGATION.Schedule} component={DiscoveryStackNavigation} options={generateTabOptions('clock')} />
      <Tab.Screen name={NAVIGATION.Favourite} component={DiscoveryStackNavigation} options={generateTabOptions('star')} />
      <Tab.Screen name={NAVIGATION.More} component={DiscoveryStackNavigation} options={generateTabOptions('square')} />
    </Tab.Navigator>
  );
}

export function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName={NAVIGATION.Home}>
      <Drawer.Screen name={NAVIGATION.Home} component={BottomTabNavigation} />
      <Drawer.Screen name={NAVIGATION.HouseDetail} component={HouseDetailStackNavigation} />
    </Drawer.Navigator>
  );
}
