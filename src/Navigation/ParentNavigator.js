import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { DeviceEventEmitter } from "react-native";
import AdminNavigator from "./AdminNavigator";
import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";
import * as Notifications from "expo-notifications";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

const ParentNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
  const auth = getAuth();
  const Stack = createNativeStackNavigator();
  const currentUser = auth.currentUser;
  // console.log("currentUser", currentUser?.displayName);
  const getToken = async () => {
    const tokenvar = (await Notifications.getDevicePushTokenAsync()).data;
    // setToken(tokenvar);
    console.log("tokenVar", tokenvar);

    try {
      await updateProfile(currentUser, {
        displayName: tokenvar,
      });
      console.log("User profile updated successfully");
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", "user", user);
      // if (currentUser) {
      //   getToken();
      // }
      setIsLoggedIn(!!user);
      setUser(user?.email);
    });
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
