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
  Modal,
  TouchableHighlight,
  Alert,
  ToastAndroid,
} from "react-native";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

export default function Register_user(props) {
  const [phone, setPhone] = useState("");
  const auth = getAuth();

  const validate = async () => {
    if (phone.trim() === "") {
      return ToastAndroid.show(
        "Please Enter Your Phone Number",
        ToastAndroid.SHORT
      );
    }
    try {
      setLoading(true);
      await phone(auth, email, password);
      setLoading(false);

      props.navigation.navigate("Admin_login");
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/firescue_logo.png")}
      />
      <Text title="Pannel" style={styles.textStyle}>
        REGISTRATION USER
      </Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          keyboardType="number-pad"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setPhone(name)}
          value={phone}
          multiline={true}
        />
      </View>

      <TouchableOpacity>
        <Text
          style={styles.register_button}
          onPress={() => props.navigation.navigate("User_login")}
        >
          Back to Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.RegisterText} onPress={validate}>
          REGISTER
        </Text>
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
  },
  image: {
    marginTop: 5,
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
    padding: 10,
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
    paddingBottom: 20,
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
    marginTop: 15,
  },
  register_button: {
    height: 20,
    marginBottom: 20,
  },
  RegisterText: {
    color: "white",
  },
});
