import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import auth from "@react-native-firebase/auth";
import * as Notifications from "expo-notifications";
import {
  getAuth,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { db, firebaseConfig } from "../../Config";
import { getDatabase, ref, update } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";

const User_login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("+923032900445");
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [token, setToken] = useState(null);
  const database = getDatabase();

  const auth = getAuth();
  const recaptchaVerifier = React.useRef(null);

  const getToken = async () => {
    const tokenvar = (await Notifications.getExpoPushTokenAsync()).data;
    setToken(tokenvar);
    console.log("tokenVar", tokenvar);
  };
  useEffect(() => {
    getToken();
  }, []);

  const SendVerification = async () => {
    try {
      const phoneProvider = signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier.current
      );
      // console.log("phoneProvider", phoneProvider);
      setVerificationId((await phoneProvider).verificationId);
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  const handleSignInWithOTP = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      const userCredential = await signInWithCredential(auth, credential);
      const tokenvar = (await Notifications.getDevicePushTokenAsync()).data;

      await addDoc(collection(db, "user"), {
        phoneNumber,
        token: tokenvar,
      });
      console.log("User signed in", userCredential.user);
    } catch (error) {
      // Handle error
      console.error("Error signing in with OTP", error);
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.otpText}>Login using OTP</Text>
      <TextInput
        placeholder="Phone Number with country code"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholderTextColor={"#fff"}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.sendVerification}
        onPress={SendVerification}
      >
        <Text style={styles.buttonText}>Send Verification</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Confirm Code"
        value={verificationCode}
        onChangeText={(text) => setVerificationCode(text)}
        keyboardType="number-pad"
        autoCompleteType="tel"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.sendCode} onPress={handleSignInWithOTP}>
        <Text style={styles.buttonText}>Confirm Verification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User_login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontSize: 24,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  sendVerification: {
    padding: 20,
    backgroundColor: "#3498db",
    borderRadius: 10,
  },
  sendCode: {
    padding: 20,
    backgroundColor: "9b59b6",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  otpText: {
    fontsize: 24,
    fontWeight: "bold",
    color: "#fff",
    margin: 20,
  },
});
