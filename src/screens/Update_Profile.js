import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,Image,StatusBar,TouchableOpacity } from 'react-native';

export default function Update_Profile() {
const[name,setname]= useState('');
const [Email_Address, setEmail_Address] = useState('');
const[location,setlocation]= useState('');
const[Password,setPassword]= useState('');
const[Confirm_Password,setConfirm_Password]=useState('');


const handleRegister = () => {
    // Validate form values and register the user
};

return (
    <View style={styles.container}>
    <Text title="Pannel" style={styles.textStyle}>UPDATE PROFILE</Text>
    <StatusBar style="auto" />
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Fetched Name"
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
        onChangeText={(Email_Address) => setEmail_Address(Email_Address)}
        multiline={true}
        /> 
    </View> 
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Fetched Location"
        placeholderTextColor="#003f5c"
        onChangeText={(location) => setlocation(location)}
        multiline={true}
        /> 
    </View> 
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#003f5c"
        onChangeText={(Password) => setPassword(Password)}
        multiline={true}
        /> 
    </View> 
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password"
        placeholderTextColor="#003f5c"
        onChangeText={(Confirm_Password) => setConfirm_Password(Confirm_Password)}
        multiline={true}
        /> 
    </View> 
    <TouchableOpacity style={styles.SaveBtn}>
        <Text style={styles.SaveText}>Save</Text> 
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
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 100,
        borderColor: 'black',
        borderWidth:1,
        width: InputLength,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        paddingHorizontal: 100,
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
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:20,
    position: 'relative',
    paddingTop: 0,
    },
    SaveBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: 'red',
        marginBottom: 50,
        padding: 20,
        marginTop:20,
    },
    register_button: {
        height: 20,
        marginBottom: 20,
    },
    SaveText:{
        color:'white',
        }
});