import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync } from "./src/Utils/HelperFunction";
import UserNavigator from "./src/Navigation/UserNavigator";
import AuthNavigator from "./src/Navigation/AuthNavigator";
import ParentNavigator from "./src/Navigation/ParentNavigator";

// import messaging from "@react-native-firebase/messaging";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const notificationListener = useRef();
  const responseListener = useRef();
  const Stack = createNativeStackNavigator();
  const [token, setToken] = useState(false);
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      console.log("token", token)
    );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {});
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
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
