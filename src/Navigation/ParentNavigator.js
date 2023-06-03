import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Admin_login from "../screens/Admin_login";
import MainPannel from "../screens/MainPannel";
import Register_Admin from "../screens/Register_Admin";
import Register_user from "../screens/Register_user";
import User_login from "../screens/User_login";
import AdminNavigator from "./AdminNavigator";
import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";

const ParentNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      <Stack.Screen name="AdminNavigator" component={AdminNavigator} />
      <Stack.Screen name="UserNavigator" component={UserNavigator} />
    </Stack.Navigator>
  );
};
export default ParentNavigator;
