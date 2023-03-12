import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Alert
} from "react-native";

export default function Admin_login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

  const validate = () => {
    if (!emailRegex.test(email)) {
    Alert.alert('OOPS!','Invalid Email',[
      {text:'Cancel',onPress: () => console.log('alert closed')}
    ]);
    setShowAlert(true);
    } else if (!passwordRegex.test(password)) {
      Alert.alert('OOPS!','Password must be at least 8 characters long and contain at least one letter and one number',[
        {text:'Cancel',onPress:()=>console.log('alert closed')}
      ]);
    } else {
    navigation.navigate("AdminDashboard");
    }
};


  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={require("../../assets/firescue_logo.png")} /> 
      <Text title="Pannel" style={styles.textStyle}>Admin Login</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.register_button} onPress={()=>navigation.navigate("Register_Admin")}>Create Account/Register</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={validate}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}

const InputLength=240;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:100,
},
image: {
    marginTop: 5,
},
inputView: {
    backgroundColor: "white",
        borderRadius: 100,
        borderColor: 'black',
        borderWidth:1,
        width: InputLength,
        height: 45,
        marginBottom: 15,
        alignItems: "center",
        flexDirection:'row',
        paddingHorizontal: 100,
},
TextInput: {
    height: 50,
        flex:1,
       // paddingright: 20,
        marginleft: 0,
       // padding:10,
        width:500,
        marginLeft:-90,
        textAlign:'left',
        flexDirection: 'row',
       // display: 'flex',
},
register_button: {
    height: 30,
    marginBottom: 30,
},
loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'red',
    marginBottom: 20,
    padding: 30,
    marginTop:0,
    marginBottom: 80,
},
imageStyle:{
    width:200,
    height:200,
    marginBottom:0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
},
textStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:20,
    position: 'relative',
    paddingTop: 0,
    },
page:{
    marginBottom: 70,
},
loginText:{
    color:'white',
},
error: {
  fontSize: 16,
  color: 'red',
  marginTop: 10,
},
});