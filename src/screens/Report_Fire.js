import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,Image,StatusBar,TouchableOpacity } from 'react-native';
import MapWindow from './new_page';

export default function Report_Fire(){
    const[Description,setDescription]= useState('');


return(
    <View style={styles.container_whole}>
        <Text title="report" style={styles.report_fire}>REPORT FIRE</Text>
        <Text title="subheading" style={styles.subheading}>My Current Location</Text>
        <View style={styles.container}>
        <MapWindow style={styles.map} />
    </View>
        <Text title="text" style={styles.description_text}>Describe the Incidence</Text>
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Enter Description here."
        placeholderTextColor="#003f5c"
        onChangeText={(Description) => setDescription(Description)}
        multiline={true}
        /> 
    </View> 
    <View> 
    <TouchableOpacity style={styles.Button}>
        <Text style={styles.Button_Text}>SEND REPORT</Text> 
    </TouchableOpacity>
    </View>
    </View>

);
}
const InputLength= 230;

const styles =StyleSheet.create({
    container_whole: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
    },
    report_fire: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom:20,
        position: 'relative',
        paddingTop: 0,
        },
    subheading:{
        height: 30,
        marginBottom:0,
        marginTop: 15,
    },
    description_text:{
        height: 30,
        marginTop:30,
    },
    TextInput: {
        height: 50,
        flex:1,
        paddingright: 0,
        marginleft: 0,
        padding:0,
        marginLeft:-80,
        textAlign:'left',
        flexDirection: 'row',
        display: 'flex',
        marginBottom:90,
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 0,
        borderColor: 'black',
        width: InputLength,
        borderWidth:1,
        height: 130,
        marginBottom: 20,
        alignItems: "center",
        paddingHorizontal: 100,
        alignItems: "center",
        flexDirection:'row',
        paddingHorizontal: 100,
    },
    imageStyle:{
        width:200,
        height:200,
        marginBottom:0,
        marginTop: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: 'red',
        marginBottom: 50,
        padding: 20,
        marginTop:10,
    },
    Button_Text:{
        color:'white',
        },
        container: {
        width:200,
        height:200,
        marginBottom:0,
        marginTop: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
          },
          map: {
            flex: 1,
          },
})

