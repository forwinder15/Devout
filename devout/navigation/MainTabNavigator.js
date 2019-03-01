import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon'; 
import PrayerScreen from '../screens/PrayerScreen';
import WordScreen from '../screens/WordScreen';
import EvanScreen from '../screens/EvanScreen';
import GivingScreen from '../screens/GivingScreen'; 
import FastingScreen from '../screens/FastingScreen';

const PrayerStack = createStackNavigator({
  Home: PrayerScreen,
});

PrayerStack.navigationOptions = {
  tabBarLabel: 'Prayers',
};

const WordStack = createStackNavigator({
  Word: WordScreen,
});

WordStack.navigationOptions = {
  tabBarLabel: 'The Word',
};

const EvanStack = createStackNavigator({
  Evan: EvanScreen,
});

EvanStack.navigationOptions = {
  tabBarLabel: 'Evangilism',
};

const FastingStack = createStackNavigator({
  Fasting: FastingScreen,
});

FastingStack.navigationOptions = {
  tabBarLabel: 'Fasting',
};

const GivingStack = createStackNavigator({
  Giving: GivingScreen,
});

GivingStack.navigationOptions = {
  tabBarLabel: 'Giving',
};

export default createBottomTabNavigator({
  PrayerStack,
  WordStack,
  EvanStack,
  GivingStack,
  FastingStack
});
