import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { DeviceEventEmitter } from "react-native";
import AdminNavigator from "./AdminNavigator";
import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";
import { getMessaging } from "firebase/messaging";
// import firebase from "firebase/app";
// import "firebase/messaging";

const ParentNavigator = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const messaging = getMessaging();
  const auth = getAuth();
  const Stack = createNativeStackNavigator();
  const getDeviceToken = async () => {
    try {
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log("Device Token:", token);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", "user", user);
      setIsLoggedIn(!!user);
      setUser(user?.email);
    });

    // getDeviceToken();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        user === "admin@gmail.com" ? (
          <Stack.Screen name="AdminNavigator" component={AdminNavigator} />
        ) : (
          <Stack.Screen name="UserNavigator" component={UserNavigator} />
        )
      ) : (
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
export default ParentNavigator;
