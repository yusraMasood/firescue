import React, { useState } from "react";
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
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config";
import { showToast } from "../Utils/HelperFunction";
import { vh, vw } from "../Utils/dimensions";
import GooglePlace from "../components/GooglePlace";

export default function Add_Teams(props) {
  const [Team_ID, setTeam_ID] = useState("");
  const [teamLeader, setTeamLeader] = useState("");
  const [location, setLocation] = useState("");
  // console.log("my location", props.route?.params);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (teamLeader.trim() === "") {
      return ToastAndroid.show(
        "Please Enter Team Leader Name",
        ToastAndroid.SHORT
      );
    }
    if (!location?.address) {
      return ToastAndroid.show("Please Add Location", ToastAndroid.SHORT);
    }

    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "users"), {
        name: teamLeader,
        location: location,
      });
      setLoading(false);
      ToastAndroid.show("Team Added Successfully", ToastAndroid.SHORT);

      props.navigation.goBack();
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setLoading(false);
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text title="Pannel" style={styles.textStyle}>
        ADD TEAMS
      </Text>
      <StatusBar style="auto" />
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
      <GooglePlace location={location} setLocation={setLocation} />
      {/* <Text>Location: </Text>
    <Text>{props?.route?.params?.pin?.address}</Text> */}
      {/* <TouchableOpacity onPress={()=> props.navigation.navigate("Location_User",{getLocation:true})} style={styles.loginBtn}>
        <Text style={styles.RegisterText}>ADD Location</Text> 
    </TouchableOpacity> */}

      <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
        {loading ? (
          <ActivityIndicator size={20} color={"red"} />
        ) : (
          <Text style={styles.RegisterText}>ADD</Text>
        )}
      </TouchableOpacity>
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
    width: InputLength,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 100,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 100,
  },
  TextInput: {
    height: 50,
    flex: 1,
    paddingright: 0,
    marginleft: 0,
    padding: 0,
    marginLeft: -90,
    textAlign: "left",
    flexDirection: "row",
    display: "flex",
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
