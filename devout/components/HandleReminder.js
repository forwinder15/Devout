import React from 'react';
import { View, StyleSheet, Button, Alert, Platform, DatePickerIOS, TouchableOpacity, Text } from 'react-native';
import { Constants, Notifications, Permissions } from 'expo';
import CreateItem from './CreateItem';

// getiOSNotificationPermission = async () => {
//   let { status } = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS);
//   if (status !== 'granted') {
//     console.error('Location permisssion not granted');
//     return;
//   }
// };

export default class HandleReminder extends React.Component {

  //   constructor(props) {
  //     super(props);
  //     this.state = { chosenDate: new Date() };

  //     this.setDate = this.setDate.bind(this);
  //   }

  //   setDate(newDate) {
  //     this.setState({ chosenDate: newDate })
  //   }

  //   _handleButtonPress = () => {
  //     const localnotification = {
  //       title: 'Example Title!',
  //       body: 'This is the body',
  //       badge: 1,
  //       android: {
  //         sound: true,
  //       },
  //       ios: {
  //         sound: true,
  //       },
  //     };
  //     let selectedTime = Date.now();
  //     selectedTime += 5000;

  //     const schedulingOptions = { time: selectedTime };
  //     Notifications.scheduleLocalNotificationAsync(
  //       localnotification,
  //       schedulingOptions
  //     );
  //   };
  //   listenForNotifications = () => {
  //     Notifications.addListener(notification => {
  //       if (notification.origin === 'received' && Platform.OS === 'ios') {
  //         Alert.alert(notification.title, notification.body);
  //       }
  //     });
  //   };
  //   componentWillMount() {
  //     getiOSNotificationPermission();
  //     this.listenForNotifications();
  //   }
  render() {
    return (
      <View style={styles.container}>
        <CreateItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#92B4F4',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
});
