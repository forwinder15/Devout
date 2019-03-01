import React from 'react';
import HandleReminder from '../components/HandleReminder'

export default class WordScreen extends React.Component {
  static navigationOptions = {
    title: 'Word',
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

