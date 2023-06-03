import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  confirmPasswordReset,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Admin_login(props) {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("admin@gmail.com");
  const [location, setlocation] = useState("");
  const [OrganizationName, setOrganizationName] = useState("");
  const [password, setPassword] = useState("admin123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  const auth = getAuth();

  const validate = async () => {
    console.log("sjosjpo");
    if (email.trim() === "") {
      return ToastAndroid.show("Please Enter email", ToastAndroid.SHORT);
    }
    if (password.trim() === "") {
      return ToastAndroid.show("Please Enter password", ToastAndroid.SHORT);
    }
    if (!emailRegex.test(email)) {
      return ToastAndroid.show(
        "Please Enter Correct email",
        ToastAndroid.SHORT
      );
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      // props.navigation.navigate("AdminNavigator");
      setLoading(false);
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
        LOGIN ADMIN
      </Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email Address"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          multiline={true}
          value={email}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* <TouchableOpacity>
        <Text
          style={styles.login_button}
          onPress={() => props.navigation.navigate("Register_Admin")}
        >
          Register
        </Text>
      </TouchableOpacity> */}
      {loading ? (
        <ActivityIndicator size={20} color={"red"} />
      ) : (
        <TouchableOpacity style={styles.RegisterBtn} onPress={validate}>
          <Text style={styles.RegisterText}>Login</Text>
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
    paddingBottom: 40,
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
    marginBottom: 15,
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
    width: 100,
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
    marginTop: 0,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    position: "relative",
    paddingTop: 0,
  },
  RegisterBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "red",
    marginBottom: 20,
    padding: 30,
    marginTop: 5,
  },
  login_button: {
    height: 20,
    marginBottom: 20,
  },
  RegisterText: {
    color: "white",
  },
});
