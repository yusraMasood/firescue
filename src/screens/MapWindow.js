import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "./Location";
import { Marker, Callout, Circle } from "react-native-maps";

const MapWindow = (props) => {
  return (
    <View style={styles.container}>
      {/* <MapView style={styles.map} /> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
        region={{
          latitude: props?.location?.latitude,
          longitude: props?.location?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: props?.location?.latitude,
            longitude: props?.location?.longitude,
          }}
        />
        <Marker
          coordinate={props?.location}
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        ></Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 0.2,
    width: 200,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    marginbottom: 20,
  },
  map: {
    flex: 1,
  },
});

export default MapWindow;
