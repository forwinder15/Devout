import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HandleReminder from '../components/HandleReminder';


export default class PrayerScreen extends React.Component {
  static navigationOptions = {
    title: 'Devout',
    headerStyle: {
      backgroundColor: '#92B4F4',
      borderBottomColor: '#92B4F4'
    },
  };


  render() {
    return (
      <HandleReminder />
    );
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#92B4F4',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
