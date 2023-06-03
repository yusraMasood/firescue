import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import auth from "@react-native-firebase/auth";
import {
  getAuth,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../Config";

const User_login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("03032900445");
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const auth = getAuth();
  const recaptchaVerifier = React.useRef(null);

  const SendVerification = async () => {
    try {
      const phoneProvider = signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier.current
      );
      console.log("phoneProvider", phoneProvider);
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
      // User signed in successfully
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
