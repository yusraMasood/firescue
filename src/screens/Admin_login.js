import {View,Text, TouchableOpacity,TextInput,StyleSheet,Alert} from 'react-native'
import React, {useRef,useState} from 'react'
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';
// import {firebaseConfig} from '../../Config';

const Admin_login=()=>{
    const [PhoneNumber, setPhoneNumber]= useState('');
    const [Code,setCode]= useState('');
    const [VerificationId,setVerificationId]= useState(null);
    const recaptchaVerifier= useRef(null);

    const SendVerification= ()=>{
        const PhoneProvider= new firebase.auth.PhoneAuthProvider();
        PhoneProvider
        .verifyPhoneNumber(PhoneNumber,recaptchaVerifier.current)
        .then(setVerificationId);
        setPhoneNumber('');
    };

    const ConfirmCode=()=>{
        const credential = firebase.auth.PhoneAuthProvider.credential(
            VerificationId,
            Code
        );
        firebase.auth().signInWithCredential(credential)
        .then(()=>{
            setCode('');
        })
        .catch((error)=>{
            //show an alert in case of error
            alert(error);
        })
        Alert.alert(
            'Login Successful, Welcome to Dashboard',
        );
    };

    return(
        <View style={styles.container}>
            {/* <FirebaseRecaptchaVerifierModal 
                ref={recaptchaVerifier}
                // firebaseConfig={firebaseConfig}
            /> */}
            <Text style={styles.otpText}>
                Login using OTP
            </Text>
            <TextInput 
                placeholder='Phone Number with country code'
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendVerification} onPress={SendVerification}>
                <Text style={styles.buttonText}>
                    Send Verification
                </Text>
            </TouchableOpacity>
            <TextInput 
                placeholder='Confirm Code'
                onChangeText={setCode}
                keyboardType='number-pad'
                autoCompleteType='tel'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendCode} onPress={ConfirmCode}>
                <Text style={styles.buttonText}>
                    Confirm Verification
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Admin_login;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000",
        alignItems:'center',
        justifyContent:'center',   
    },
    textInput:{
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        marginBottom:20,
        textAlign:'center',
        color:'#fff'
    },
    sendVerification:{
        padding:20,
        backgroundColor:"#3498db",
        borderRadius:10
    },
    sendCode:{
        padding:20,
        backgroundColor:'9b59b6',
        borderRadius:10,
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    },
    otpText:{
        fontsize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20,
    }
})