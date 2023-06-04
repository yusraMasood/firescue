import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ParentNavigator from "./src/Navigation/ParentNavigator";
import { registerForPushNotificationsAsync } from "./src/Utils/HelperFunction";
import * as Notifications from "expo-notifications";

// import { Notifications } from "expo";
// import { registerForPushNotificationsAsync } from "./src/Utils/HelperFunction";

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
    // registerForPushNotificationsAsync();
    // const notificationListener = Notifications.addNotificationReceivedListener(
    //   (notification) => {
    //     console.log("Received notification:", notification);
    //     // Handle the incoming notification here
    //   }
    // );
    // return () => {
    //   Notifications.removeNotificationSubscription(notificationListener);
    // };
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
