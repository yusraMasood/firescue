import { StyleSheet, Text, View ,TextInput,Image,TouchableOpacity} from 'react-native';
import React from 'react';

const Confirm_Incident = () => {
return (
    <View style={styles.container}>
    <Text title="confirm_incident" style={styles.Confirm_Incident}>Confirm Incident</Text>
    <Text title="latest_fire_incident" style={styles.latest_fire_incident}>Latest Fire Incident</Text>
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
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <Text title="From User" style={styles.left_element}>From User:</Text>
                    </View>
                    <View style={{flex:1, padding:23}}>
                        <Text> Fetched name of user</Text>
                    </View>
                </View>
                <View> 
                    <TouchableOpacity style={styles.Button}>
                    <Text style={styles.Button_Text}>SEND REPORT</Text> 
                    </TouchableOpacity>
                </View>
</View>
    
)
}

export default Confirm_Incident

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
        paddingRight:18,
    },
    Confirm_Incident:{
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
    latest_fire_incident:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        textAlign: "center",
        fontSize: 19,
        fontWeight: 'bold',
        paddingBottom:60,
        position: 'relative',
        paddingTop: 0,
        color:"red",
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
    TextInput: {
        height: 50,
        flex:1,
        padding:5,
        flexDirection: 'row',
        display: 'flex',
        justifyContent:"flex-end",
        flex:1,
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
    Image:{
        flex:1,

    },
})