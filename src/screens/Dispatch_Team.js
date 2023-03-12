import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import {Picker} from '@react-native-picker/picker';


const Dispatch_Team = () => {
    const [selectedValue, setSelectedValue] =React.useState("");
return (
    <View style={styles.container}>
        <Text title="dispatch_team" style={styles.Dispatch_Team}>Dispatch Team</Text>
        <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
            <Text title="Select Teams" style={styles.left_element}>Select Teams: </Text>
        </View>
        
        </View>
        <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
                        <Text title="Assign Incident" style={styles.left_element}>Asign Incident: </Text>
                    </View>
                    <View style={{flex:1, padding:18}}>
                        
                    </View>
        </View>
        <View style={{flexDirection:"row"}}>
        
                    <View style={{flex:1}}>
                        <Text title="location" style={styles.left_element}>Location:</Text>
                    </View>
                    <View style={{flex:1, padding:18}}>
                        <Image style={styles.imageStyle} source={require("../../assets/location.jpg")} />
                    </View>
                </View>
            <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <Text title="Details" style={styles.left_element}>Details:</Text>
                    </View>
                    <View style={{flex:1, padding:18}}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Enter Details here"
                        placeholderTextColor="#003f5c"/>
                </View>
                </View>
                <View> 
                    <TouchableOpacity style={styles.Button}>
                    <Text style={styles.Button_Text}>DISPATCH</Text> 
                    </TouchableOpacity>
                </View>
    </View>
)
}

export default Dispatch_Team

const styles = StyleSheet.create({
    Dispatch_Team:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 12,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom:5,
        position: 'relative',
        paddingTop: 10,
        fontSize:25,
    },
    left_element:{
        justifyContent:"flex-start",
        fontSize: 16,
        padding:22,
        fontWeight:'bold',
    },
    imageStyle:{
        width:150,
        height:150,
        marginBottom:0,
        marginTop: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding:18,
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
        marginTop:28,
    },
    Button_Text:{
        color:'white',
        },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
        paddingRight:18,
    },
    view: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingleft:30,
    },
    text: {
        fontSize: 20,
        marginBottom: 20
    },
    picker: {
        width: 200,
        height: 44
    },
})