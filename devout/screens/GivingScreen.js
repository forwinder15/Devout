import React, { Component } from 'react';
import HandleReminder from '../components/HandleReminder';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Giving',
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
}

    

