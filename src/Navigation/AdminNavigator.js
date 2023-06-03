import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { DeviceEventEmitter } from "react-native";
import Add_Teams from "../screens/Add_Teams";
import AdminDashboard from "../screens/AdminDashboard";
import Confirm_Incident from "../screens/Confirm_Incident";
import Dispatch_Team from "../screens/Dispatch_Team";
import Location from "../screens/Location";
import Location_User from "../screens/Location_User";
import Manage_Teams from "../screens/Manage_Teams";
import Manage_Users from "../screens/Manage_Users";
import MapWindow from "../screens/MapWindow";
import Show_Teams from "../screens/Show_Teams";
import Update_Teams from "../screens/Update_Teams";
import * as Notifications from "expo-notifications";

const AdminNavigator = () => {
  const Stack = createNativeStackNavigator();

  const receiveNotification = async (eventlisten) => {
    console.log("event", eventlisten);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  };
  useEffect(() => {
    DeviceEventEmitter.addListener("event.test", (event) => {
      console.log("event", event);
      receiveNotification(event);
      alert("event:test");
      DeviceEventEmitter.removeAllListeners();
    });

    // DeviceEventEmitter.emit("event.test", {});
  }, []);
  return (
    <Stack.Navigator initialRouteName="AdminDashboard">
      <Stack.Screen name="MapWindow" component={MapWindow} />
      <Stack.Screen name="Manage_Users" component={Manage_Users} />
      <Stack.Screen name="Manage_Teams" component={Manage_Teams} />
      <Stack.Screen name="Add_Teams" component={Add_Teams} />
      <Stack.Screen name="Show_Teams" component={Show_Teams} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Confirm_Incident" component={Confirm_Incident} />
      <Stack.Screen name="Dispatch_Team" component={Dispatch_Team} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="Location_User" component={Location_User} />
      <Stack.Screen name="Update_Teams" component={Update_Teams} />
    </Stack.Navigator>
  );
};
export default AdminNavigator;
