import React from 'react';
import {
  DatePickerIOS,
  View,
  StyleSheet,
} from 'react-native'


export default class EvanScreen extends React.Component {
  static navigationOptions = {
    title: 'Evangelism',
    headerStyle: {
      backgroundColor: '#92B4F4',
      borderBottomColor: '#92B4F4'
   },
  };

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})



