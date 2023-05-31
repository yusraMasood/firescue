import React from "react";
import { vh, vw } from "../../Utils/dimensions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlace = (props) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails={true}
      GooglePlacesSearchQuery={{
        rankby: "distance",
      }}
      onPress={(data, details = null) => {
        props.setLocation({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          address: data?.description,
        });
      }}
      textInputProps={{
        value: props?.location?.address,
        // onTouch
        // onChangeText: (text) => props.setLocation(text),
      }}
      query={{
        key: "AIzaSyC7Z4mzbawELQdpzejppo-LEIgq1NchUgc",
        language: "en",
        components: "country:pk",
        types: ["(address)"],
        radius: 100000,
        location: `${props.location?.latitude},${props.location?.longitude}`,
      }}
      defaultValue="Karachi"
      styles={{
        container: {
          flex: 0,
          //   height: vh * ,
          // position: "absolute",
          // width: "100%",
          marginTop: vh * 2,
          width: vw * 90,
          borderWidth: 1,
          // borderRadius: 200,
          // zIndex: 1,
        },
        listView: { backgroundColor: "white" },
      }}
    />
  );
};
export default GooglePlace;
