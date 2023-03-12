import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,Image,StatusBar,TouchableOpacity,Alert } from 'react-native';

export default function Register_Admin({navigation}) {
const[name,setname]= useState('');
const[email,setEmail]= useState('');
const[location,setlocation]=useState('');
const[OrganizationName,setOrganizationName]=useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');



const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

const validate = () => {
    if (!emailRegex.test(email)){
        Alert.alert('OOPS!','Invalid Email',[
            {text:'Cancel',onPress: () => console.log('alert closed')}
        ]);
    } 
    else if (!passwordRegex.test(password)) {
        Alert.alert('OOPS!','Password must be at least 8 characters long and contain at least one letter and one number',[
            {text:'Cancel',onPress:()=>console.log('alert closed')}
        ]);
    } 
    else if (name===''){
        Alert.alert('Error','Please enter your full name',[
            {text:'Cancel',onPress: () => console.log('alert closed')}
        ]);
    }
    else if(location===""){
        Alert.alert('Error','Please enter your location',[
            {text:'Cancel',onPress:()=>console.log('alert closed')}]);
    }
    else if(OrganizationName===""){
        Alert.alert('Error','Please enter your Oraganization Name',[
            {text:'Cancel',onPress:()=>console.log('alert closed')}]);
    }
    else if(!passwordRegex.test(confirmPassword)){
        Alert.alert('Error','Please confirm your password',[
            {text:'Cancel',onPress:()=>console.log('alert closed')}]);
    }
    else {
    navigation.navigate("Admin_login");
    }
};


return (
    <View style={styles.container}>
    <Image style={styles.imageStyle} source={require("../../assets/firescue_logo.png")} /> 
    <Text title="Pannel" style={styles.textStyle}>REGISTRATION ADMIN</Text>
    <StatusBar style="auto" />
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Full Name"
        placeholderTextColor="#003f5c"
        onChangeText={(name) => setname(name)}
        multiline={true}
        /> 
    </View> 
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Email Address"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
        multiline={true}
        /> 
    </View> 
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Location"
        placeholderTextColor="#003f5c"
        onChangeText={(location) => setlocation(location)}
        multiline={true}
        /> 
    </View> 
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Organization Name"
        placeholderTextColor="#003f5c"
        onChangeText={(OrganizationName) => setOrganizationName(OrganizationName)}
        multiline={true}
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
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        /> 
    </View> 

    <TouchableOpacity>
        <Text style={styles.login_button} onPress={()=>navigation.navigate("Admin_login")}>Back to Login</Text> 
    </TouchableOpacity> 
    <TouchableOpacity style={styles.RegisterBtn}>
        <Text style={styles.RegisterText} onPress={validate}>REGISTER</Text> 
    </TouchableOpacity>
    </View> 
    
);
}
const InputLength= 260;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom:40,
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
        paddingright: 0,
        marginleft: 0,
        padding:10,
        marginLeft:-90,
        textAlign:'left',
        flexDirection: 'row',
        display: 'flex',
    },
    imageStyle:{
        width:100,
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
    marginTop: 0,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:20,
    position: 'relative',
    paddingTop: 0,
    },
    RegisterBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: 'red',
        marginBottom: 20,
        padding: 30,
        marginTop:5,
    },
    login_button: {
        height: 20,
        marginBottom: 20,
    },
    RegisterText:{
        color:'white',
        }
});