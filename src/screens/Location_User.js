import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Marker, Callout, Circle } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useState } from "react";

export default function Location_User(props) {
  const [pin, setPin] = React.useState({
    latitude: 24.860966,
    longitude: 66.990501,
  });

  const [mapLocation, setMapLocation] = useState(null);

  const onRegionChange = (region) => {
    setMapLocation(region);
  };
  const onPressSend = () => {
    if (props?.route?.params?.getLocation) {
      props.navigation.navigate("Add_Teams", { pin });
    }
    if (props?.route?.params?.updateLocation) {
      props.navigation.navigate("Update_Teams", { pin });
    } else {
      props.navigation.navigate("Report_Fire", { pin });
    }
  };

  return (
    <View style={{ marginTop: 0, flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          console.log("hello", data?.description);
          setPin({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            address: data?.description,
          });
        }}
        query={{
          key: "AIzaSyC7Z4mzbawELQdpzejppo-LEIgq1NchUgc",
          language: "en",
          components: "country:pk",
          types: ["(address)"],
          radius: 100000,
          location: `${pin.latitude},${pin.longitude}`,
        }}
        defaultValue="Karachi"
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
        region={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
        />
        <Marker
          coordinate={pin}
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
        >
          <Callout>
            <Text>I am here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 25,
          right: 50,
          left: 50,
          backgroundColor: "red",
          paddingHorizontal: 50,
          borderRadius: 100,
          padding: 15,
          borderRadius: 50,
          position: "absolute",
        }}
        onPress={onPressSend}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
