import React from 'react';
import { Text, View, StyleSheet, Pressable,Image,TouchableOpacity } from 'react-native';

export default function MainPannel(props) {
const { onPress, title = 'Admin' ,title2='User'} = props;
return (
<View style={styles.container}>
    <Image
    style={styles.imageStyle}
    source={require("../../assets/firescue_logo.png")}
    />
    <Text title="Pannel" style={styles.textStyle}>Main Panel</Text>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('AdminDashboard')}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('User_login')}>
    <Text style={styles.text}>{title2}</Text>
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
        paddingBottom:250,
    },
button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 80,
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
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:20,
    position: 'relative',
    paddingTop: 0,
},
imageStyle:{
    width:100,
    height:200,
    marginBottom:0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
},
})