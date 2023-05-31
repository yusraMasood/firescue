import React from 'react';
import { Text, View, StyleSheet, Pressable,Image,TouchableOpacity } from 'react-native';

export default function ManageOrganizations(props) {
const { onPress, title = 'School' ,title2='University',title3='Office',title4='Industry'} = props;
return (
<View style={styles.container}>
    <Image
    style={styles.imageStyle}
    source={require("../../assets/firescue_logo.png")}
    />
    <Text title="Pannel" style={styles.textStyle}>Manage Organizations</Text>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("TypeOfFire")}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("TypeOfFire")}>
    <Text style={styles.text}>{title2}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("TypeOfFire")}>
    <Text style={styles.text}>{title3}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("TypeOfFire")}>
    <Text style={styles.text}>{title4}</Text>
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
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 100,
    elevation: 3,
    width:260,
    backgroundColor: 'red',
    marginBottom: 20,
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
    marginBottom: 150,
},
})