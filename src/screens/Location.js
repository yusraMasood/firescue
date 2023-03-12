import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View ,Text} from 'react-native';
import { Marker ,Callout,Circle} from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {

    const[pin,setPin]= React.useState({
        latitude: 13.406,
        longitude: 123.3753,
    });

    React.useEffect(() => {
        (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);

        setPin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            });
        })();
    }, []);
return (
    <View style={styles.container}>
    <MapView style={styles.map}
    initialRegion={{
        latitude: 13.406,
        longitude: 123.3753,
        latitudeDelta: 0.005,
        longitudeDelta: 0.0005,
    }}
    showsUserLocation={true}
    onUserLocationChange={(e)=>{
        console.log("onUserLocationChange",e.nativeEvent.coordinate);
    }}
    >
        <Marker 
        coordinate={pin}
        draggable={true}
        onDragStart={(e)=>{
            console.log("Drag Start",e.nativeEvent.coordinate);
        }}
        onDragEnd={(e)=>{
            console.log("Drag End",e.nativeEvent.coordinate);
        }}
        >
            
            <Callout>
                <Text>This is Callout</Text>
            </Callout>
        </Marker>
        <Circle center={pin} radius={100}/>
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