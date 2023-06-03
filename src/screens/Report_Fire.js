import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  DeviceEventEmitter,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import { vh, vw } from "../Utils/dimensions";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config";
import MapWindow from "./MapWindow";
import * as Notifications from "expo-notifications";

export default function Report_Fire(props) {
  const [loading, setLoading] = useState(false);
  const [Description, setDescription] = useState(
    `${props?.route?.params?.type}-${props?.route?.params?.organization}`
  );

  const sendNotification = async () => {
    try {
      setLoading(true);
      await addDoc(collection(db, "report"), {
        description: Description,
        location: props.route?.params?.pin,
      });
      setLoading(false);
      DeviceEventEmitter.emit("event.test", {
        description: Description,
        location: props.route?.params?.pin,
      });
      ToastAndroid.show("Report send to admin", ToastAndroid.SHORT);
      props.navigation.navigate("ManageOrganizations");

      // props.navigation.goBack();
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setLoading(false);
      console.error("Error adding document: ", e);
    }

    // await Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "You've got mail! 📬",
    //     body: "Here is the notification body",
    //     data: { data: "goes here" },
    //   },
    //   trigger: { seconds: 2 },
    // });
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
          <TouchableOpacity onPress={sendNotification} style={styles.Button}>
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
