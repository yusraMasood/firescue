import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { vh, vw } from "../Utils/dimensions";
import { collection, addDoc, getDocs } from "firebase/firestore";
import * as Notifications from "expo-notifications";
import { db } from "../../Config";
import MapWindow from "./MapWindow";
import { sendNotification } from "../Utils/HelperFunction";
import { getAuth } from "firebase/auth";

export default function Report_Fire(props) {
  const [loading, setLoading] = useState(false);
  const [Description, setDescription] = useState(
    `${props?.route?.params?.type}-${props?.route?.params?.organization}`
  );
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const addReportFire = async () => {
    try {
      setLoading(true);
      const tokenvar = (await Notifications.getDevicePushTokenAsync()).data;
      await addDoc(collection(db, "report"), {
        description: Description,
        location: props.route?.params?.pin,
        token: tokenvar,
      });

      const data = {
        description: Description,
        location: props.route?.params?.pin,
      };
      const querySnapshot = await getDocs(collection(db, "user"));
      // const tempArray = [];
      let admin;
      querySnapshot.forEach((doc) => {
        if (doc?.data()?.email === "admin@gmail.com") {
          admin = doc?.data()?.token;
        }
      });

      sendNotification(admin, data);
      setLoading(false);
      props.navigation.navigate("ManageOrganizations");
    } catch (e) {
      setLoading(false);
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container_whole}>
      <Text title="report" style={styles.report_fire}>
        REPORT FIRE
      </Text>
      <Text title="subheading" style={styles.subheading}>
        My Current Location
      </Text>
      <View style={styles.container}>
        <MapWindow location={props.route?.params?.pin} style={styles.map} />
      </View>
      <Text title="text" style={styles.description_text}>
        Describe the Incidence
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Description here."
          placeholderTextColor="#003f5c"
          onChangeText={(Description) => setDescription(Description)}
          value={Description}
          multiline={true}
        />
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size={20} color={"red"} />
        ) : (
          <TouchableOpacity onPress={addReportFire} style={styles.Button}>
            <Text style={styles.Button_Text}>SEND REPORT</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const InputLength = 230;

const styles = StyleSheet.create({
  container_whole: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  report_fire: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    position: "relative",
    paddingTop: 0,
  },
  subheading: {
    height: 30,
    marginBottom: 0,
    marginTop: 15,
  },
  description_text: {
    height: 30,
    marginTop: 30,
  },
  TextInput: {
    // height: 50,
    flex: 1,
    // paddingright: 0,
    // marginleft: 0,
    // padding: 0,
    // marginLeft: -80,
    // textAlign: "left",
    // flexDirection: "row",
    // display: "flex",
    // marginBottom: 90,
    paddingHorizontal: vw * 3,
    borderColor: "black",
    width: vw * 90,
    borderWidth: 1,
  },
  inputView: {
    // backgroundColor: "white",
    // borderRadius: 0,
    // borderColor: "black",
    // width: vw * 90,
    // borderWidth: 1,
    height: vh * 10,
    // marginBottom: 20,
    // alignItems: "center",
    // paddingHorizontal: 100,
    // alignItems: "center",
    // flexDirection: "row",
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "red",
    marginBottom: 50,
    padding: 20,
    marginTop: 10,
  },
  Button_Text: {
    color: "white",
  },
  container: {
    width: 200,
    height: 200,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  map: {
    flex: 1,
  },
});
