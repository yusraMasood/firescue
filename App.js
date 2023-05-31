import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainPannel from "./src/screens/MainPannel";
import Admin_login from "./src/screens/Admin_login";
import User_login from "./src/screens/User_login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDashboard from "./src/screens/UserDashboard";
import AdminDashboard from "./src/screens/AdminDashboard";
import Register_Admin from "./src/screens/Register_Admin";
import Register_user from "./src/screens/Register_user";
import ManageOrganizations from "./src/screens/ManageOrganizations";
import TypeOfFire from "./src/screens/TypeOfFire";
import Report_Fire from "./src/screens/Report_Fire";
import Manage_Users from "./src/screens/Manage_Users";
import Manage_Teams from "./src/screens/Manage_Teams";
import Add_Teams from "./src/screens/Add_Teams";
import Location from "./src/screens/Location";
import Confirm_Incident from "./src/screens/Confirm_Incident";
import Dispatch_Team from "./src/screens/Dispatch_Team";
import Location_User from "./src/screens/Location_User";
import new_page from "./src/screens/new_page";
import Show_Teams from "./src/screens/Show_Teams";
import Update_Teams from "./src/screens/Update_Teams";
// import messaging from "@react-native-firebase/messaging";

export default function App() {
  const Stack = createNativeStackNavigator();
  // useEffect(() => {
  //   if (Platform.OS === "android") {
  //     messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //       console.log("Message handled in the background!", remoteMessage);
  //     });
  //   }
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPannel">
        <Stack.Screen name="MainPannel" component={MainPannel} />
        <Stack.Screen name="Admin_login" component={Admin_login} />
        <Stack.Screen name="User_login" component={User_login} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="new_page" component={new_page} />
        <Stack.Screen name="Register_Admin" component={Register_Admin} />
        <Stack.Screen name="Register_user" component={Register_user} />
        <Stack.Screen
          name="ManageOrganizations"
          component={ManageOrganizations}
        />
        <Stack.Screen name="TypeOfFire" component={TypeOfFire} />
        <Stack.Screen name="Report_Fire" component={Report_Fire} />
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
