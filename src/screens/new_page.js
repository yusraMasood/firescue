import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from './Location';

const MapWindow = () => {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 10,
      right: .2,
      width: 200,
      height:  200,
      borderRadius: 15,
      overflow: 'hidden',
      marginbottom: 20,
    },
    map: {
      flex: 1,
    },
  });
  
  export default MapWindow;
  