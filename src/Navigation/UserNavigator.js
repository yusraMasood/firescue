import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Confirm_Incident from "../screens/Confirm_Incident";
import Location from "../screens/Location";
import Location_User from "../screens/Location_User";
import ManageOrganizations from "../screens/ManageOrganizations";
import MapWindow from "../screens/MapWindow";
import Report_Fire from "../screens/Report_Fire";
import TypeOfFire from "../screens/TypeOfFire";
import UserDashboard from "../screens/UserDashboard";

const UserNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="ManageOrganizations">
      <Stack.Screen name="UserDashboard" component={UserDashboard} />
      <Stack.Screen name="MapWindow" component={MapWindow} />

      <Stack.Screen
        name="ManageOrganizations"
        component={ManageOrganizations}
      />
      <Stack.Screen name="TypeOfFire" component={TypeOfFire} />
      <Stack.Screen name="Report_Fire" component={Report_Fire} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Confirm_Incident" component={Confirm_Incident} />
      {/* <Stack.Screen name="Dispatch_Team" component={Dispatch_Team} /> */}
      {/* <Stack.Screen name="AdminDashboard" component={AdminDashboard} /> */}
      <Stack.Screen name="Location_User" component={Location_User} />
      {/* <Stack.Screen name="Update_Teams" component={Update_Teams} /> */}
    </Stack.Navigator>
  );
};
export default UserNavigator;
