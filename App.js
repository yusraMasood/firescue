import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPannel from './src/screens/MainPannel';
import Admin_login from './src/screens/Admin_login';
import User_login from './src/screens/User_login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authority_login from './src/screens/Authority_login';
import UserDashboard from './src/screens/UserDashboard';
import AdminDashboard from './src/screens/AdminDashboard';
import Authority_Dashboard from './src/screens/Authority_Dashboard';
import Register_Admin from './src/screens/Register_Admin';
import Register_user from './src/screens/Register_user';
import ManageOrganizations from './src/screens/ManageOrganizations';
import TypeOfFire from './src/screens/TypeOfFire';
import Report_Fire from './src/screens/Report_Fire';
import Update_Profile from './src/screens/Update_Profile';
import Manage_Users from './src/screens/Manage_Users';
import Manage_Teams from './src/screens/Manage_Teams';
import Add_Teams from './src/screens/Add_Teams';
import Delete_Teams from './src/screens/Delete_Teams';
import Location from './src/screens/Location';
import Confirm_Incident from './src/screens/Confirm_Incident';
import Dispatch_Team from './src/screens/Dispatch_Team';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='MainPannel'>
    <Stack.Screen name="MainPannel" component={MainPannel}/>
    <Stack.Screen name="Admin_login" component={Admin_login}/>
    <Stack.Screen name="User_login" component={User_login}/>
    <Stack.Screen name="Authority_login" component={Authority_login}/>
    <Stack.Screen name="UserDashboard" component={UserDashboard}/>
    <Stack.Screen name="AdminDashboard" component={AdminDashboard}/>
    <Stack.Screen name="Authority_Dashboard" component={Authority_Dashboard}/>
    <Stack.Screen name="Register_Admin" component={Register_Admin}/>
    <Stack.Screen name="Register_user" component={Register_user}/>
    <Stack.Screen name="ManageOrganizations" component={ManageOrganizations}/>
    <Stack.Screen name="TypeOfFire" component={TypeOfFire}/>
    <Stack.Screen name="Report_Fire" component={Report_Fire}/>
    <Stack.Screen name="Update_Profile" component={Update_Profile}/>
    <Stack.Screen name="Manage_Users" component={Manage_Users}/>
    <Stack.Screen name="Manage_Teams" component={Manage_Teams}/>
    <Stack.Screen name="Add_Teams" component={Add_Teams}/>
    <Stack.Screen name="Delete_Teams" component={Delete_Teams}/>
    <Stack.Screen name="Location" component={Location}/>
    <Stack.Screen name="Confirm_Incident" component={Confirm_Incident}/>
    <Stack.Screen name="Dispatch_Team" component={Dispatch_Team}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
