import React from 'react';
import { Text, View, StyleSheet, Pressable,Image,TouchableOpacity } from 'react-native';

export default function Authority_Dashboard(props) {
const { onPress, title1 = 'Dispatch Team' ,title2='Manage Teams',title3='Locations',title4='View Report',title5='Logout'} = props;
return (
<View style={styles.container}>
    <Image
    style={styles.imageStyle}
    source={require("../../assets/firescue_logo.png")}
    />
    <Text title="Pannel" style={styles.textStyle}>Authority Dashboard</Text>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("Dispatch_Team")}>
    <Text style={styles.text}>{title1}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("Manage_Teams")}>
    <Text style={styles.text}>{title2}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title3}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("MainPannel")}>
    <Text style={styles.text}>{title5}</Text>
    </TouchableOpacity>
</View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom:150,
    },
button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'red',
    marginBottom: 20,
    width:260,
    padding: 30,
    marginTop:0,
},
text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
},
textStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:0,
    marginBottom: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:20,
    position: 'relative',
    paddingTop: 0,
},
imageStyle:{
    width:200,
    height:200,
    marginBottom:0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
},
view:{
    marginBottom: 70,
},
})