import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,Image,StatusBar,TouchableOpacity } from 'react-native';

export default function Add_Teams() {
const[Team_ID,setTeam_ID]= useState('');
const [Team_Leaders, setTeam_Leaders] = useState('');
const[Team_Location,setTeam_Location]= useState('');


const handleRegister = () => {
    // Validate form values and register the user
};

return (
    <View style={styles.container}>
    <Text title="Pannel" style={styles.textStyle}>ADD TEAMS</Text>
    <StatusBar style="auto" />
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Search Team ID"
        placeholderTextColor="#003f5c"
        onChangeText={(Team_ID) => setTeam_ID(Team_ID)}
        multiline={true}
        /> 
    </View> 
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Team Leaders"
        placeholderTextColor="#003f5c"
        onChangeText={(Team_Leaders) => setTeam_Leaders(Team_Leaders)}
        multiline={true}
        /> 
    </View> 
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Team Location"
        placeholderTextColor="#003f5c"
        onChangeText={(Team_Location) => setTeam_Location(Team_Location)}
        multiline={true}
        /> 
    </View> 
    <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.RegisterText}>ADD</Text> 
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
        paddingTop:10,
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
        padding:0,
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
    marginBottom: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:25,
    position: 'relative',
    paddingTop: 0,
    },
    loginBtn: {
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
    RegisterText:{
        color:'white',
        }
});