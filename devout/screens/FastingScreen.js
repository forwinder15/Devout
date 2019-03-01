import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { MapView, Marker } from 'expo';

export default class FastingScreen extends Component {
  static navigationOptions = {
    title: 'Fasting',
    headerStyle: {
      backgroundColor: '#92B4F4',
      borderBottomColor: '#92B4F4'
    },
  };


  state = {
    location: null,
  }


  _getLocationAsync = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== 'granted') {
      console.error('Location permisssion not granted');
      return;
    }
    let location = await Expo.Location.getCurrentPositionAsync({});


    this.setState({ location });
  };

  componentDidMount() {
    this._getLocationAsync();
  }



  render() {

    if (!this.state.location) {
      return (<View />);
    }
    return (
      <Expo.MapView
        style={styles.container}
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0922 / 2,
          longitudeDelta: 0.0421 / 2,
        }}>
        <Expo.MapView.Marker coordinate={this.state.location.coords} title='You is here' />
      </Expo.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});