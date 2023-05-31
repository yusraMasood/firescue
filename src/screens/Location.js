import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text ,TouchableOpacity} from 'react-native';
import { Marker, Callout, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useState } from 'react';

export default function App(props) {
const [pin, setPin] = React.useState({
    latitude: 24.860966,
    longitude: 66.990501,
});

const [mapLocation, setMapLocation] = useState(null);

const onRegionChange = (region) => {
setMapLocation(region);
};

return (
    <View>
    <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
        rankby: "distance"
        }}
        onPress={(data, details = null) => {
        console.log(data, details);
        setPin({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
        });
        }}
        query={{
        key: 'AIzaSyC7Z4mzbawELQdpzejppo-LEIgq1NchUgc',
        language: 'en',
        components: "country:pk",
        types: ['(address)'],
        radius: 100000,
        location: `${pin.latitude},${pin.longitude}`,
        }}
        defaultValue='Karachi'
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
        <Marker coordinate={{ latitude: pin.latitude, longitude: pin.longitude }} />
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

    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
},
map: {
    width: '100%',
    height: '100%',
},
});