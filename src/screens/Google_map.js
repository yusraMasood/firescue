import React from 'react';
import { Text, View, StyleSheet, Pressable,Image } from 'react-native';
import MapView from 'react-native-maps';

export default function Google_map() {
return (
<View style={styles.container}>
    <Text> hello please integrate map here! ...........................................................................................</Text>
    <MapView
        style= {StyleSheet.absoluteFillObject}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
    />
    
    </View>
);
}

const styles = StyleSheet.create(
    {
    container: {
    flex: 1,
    },
});