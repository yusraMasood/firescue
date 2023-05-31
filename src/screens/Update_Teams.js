import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { db } from "../../Config";
import { showToast } from "../Utils/HelperFunction";
import { vh, vw } from "../Utils/dimensions";
import GooglePlace from "../components/GooglePlace";

export default function Update_Teams(props) {
  console.log("iten", props?.route?.params?.item);
  const { item } = props?.route?.params;
  const [teamLeader, setTeamLeader] = useState(item?.desc?.name);
  const [location, setLocation] = useState(item?.desc?.location);
  // console.log("my location", props.route?.params);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const usersRef = collection(db, "users");
    if (teamLeader.trim() === "") {
      return ToastAndroid.show(
        "Please Enter Team Leader Name",
        ToastAndroid.SHORT
      );
    }
    if (!location) {
      return ToastAndroid.show("Please Add Location", ToastAndroid.SHORT);
    }

    try {
      setLoading(true);
      const docRef = await setDoc(doc(usersRef, item?.id), {
        name: teamLeader,
        location: location,
      });
      setLoading(false);
      ToastAndroid.show("Team Updated Successfully", ToastAndroid.SHORT);

      props.navigation.goBack();
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setLoading(false);
      console.error("Error adding document: ", e);
    }
  };
  console.log("location,location", location);

  return (
    <View style={styles.container}>
      <Text title="Pannel" style={styles.textStyle}>
        UPDATE TEAMS
      </Text>
      <StatusBar style="auto" />
      <Text>Team Leader:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Team Leader"
          placeholderTextColor="#003f5c"
          onChangeText={setTeamLeader}
          value={teamLeader}
          multiline={true}
        />
      </View>
      <Text>Location: </Text>
      {/* <TouchableOpacity>
        <Text>{location?.address}</Text>
      </TouchableOpacity> */}
      <GooglePlace location={location} setLocation={setLocation} />
      {/* <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Location_User", { updateLocation: true })
        }
        style={styles.loginBtn}
      >
        <Text style={styles.RegisterText}>UPDATE Location</Text>
      </TouchableOpacity> */}
      {loading ? (
        <ActivityIndicator size={20} color={"red"} />
      ) : (
        <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
          <Text style={styles.RegisterText}>UPDATE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const InputLength = 260;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    width: vw * 90,
    height: vh * 6,
    marginBottom: vh * 2,
    // alignItems: "center",
    // paddingHorizontal: 100,
    // alignItems: "center",
    // flexDirection: "row",
    // paddingHorizontal: 100,
  },
  TextInput: {
    // height: 50,
    paddingHorizontal: vw * 4,
    flex: 1,
    // paddingright: 0,
    // marginleft: 0,
    // padding: 0,
    // marginLeft: -90,
    // textAlign: "left",
    // flexDirection: "row",
    // display: "flex",
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textStyle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 25,
    position: "relative",
    paddingTop: 0,
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "red",
    marginBottom: 50,
    padding: 20,
    marginTop: 20,
  },
  register_button: {
    height: 20,
    marginBottom: 20,
  },
  RegisterText: {
    color: "white",
  },
});
