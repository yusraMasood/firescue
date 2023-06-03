import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Admin_login from "../screens/Admin_login";
import MainPannel from "../screens/MainPannel";
import Register_Admin from "../screens/Register_Admin";
import Register_user from "../screens/Register_user";
import User_login from "../screens/User_login";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="MainPannel">
      <Stack.Screen name="MainPannel" component={MainPannel} />
      <Stack.Screen name="Admin_login" component={Admin_login} />
      <Stack.Screen name="User_login" component={User_login} />
      {/* <Stack.Screen name="Register_Admin" component={Register_Admin} /> */}
      {/* <Stack.Screen name="Register_user" component={Register_user} /> */}
    </Stack.Navigator>
  );
};
export default AuthNavigator;
