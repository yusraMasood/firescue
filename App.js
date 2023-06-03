import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ParentNavigator from "./src/Navigation/ParentNavigator";
// import messaging from "firebase/messaging";

export default function App() {
  useEffect(() => {
    // const requestPermission = async () => {
    //   try {
    //     const { status } = await messaging().requestPermission();
    //     if (status === "granted") {
    //       const token = await messaging().getToken();
    //       console.log("FCM Token:", token);
    //     } else {
    //       console.log("Permission denied");
    //     }
    //   } catch (error) {
    //     console.log("Permission rejected:", error);
    //   }
    // };
    // requestPermission();
    // return messaging().onTokenRefresh((token) => {
    //   console.log("FCM Token (refreshed):", token);
    //   // Update the token in your backend database if necessary
    // });
  }, []);
  return (
    <NavigationContainer>
      <ParentNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
