import React, {useState} from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity,} from 'react-native';
import styles from './styles';
export default function SignupScreen({navigation}){
    const [textInput,setTextInput] = useState ({


    })

    return (
        <View style={styles.container}>
            <View style={styles.img_Cont}>
                <Image style={styles.imgStyle} source={require('../../assets/img/1316-ministry.jpg')}/>
            </View>

            <View>
                <Text style={styles.headerFont}>Sign Up</Text>
                
                <View style={styles.credCont}>
                    <TextInput style ={styles.inputCont} maxLength={25} placeholder='First Name'/>
                    <TextInput style ={styles.inputCont} maxLength={30} placeholder='Last Name'/>
                    <TextInput style ={styles.inputCont} maxLength={100} placeholder='Email'/>
                    <TextInput style ={styles.inputCont} maxLength={13} placeholder='Mobile Number'/>
                    <TextInput style ={styles.inputCont} maxLength={30} placeholder='Password'/>
                    <TextInput style ={styles.inputCont} maxLength={30} placeholder='Confirm Password'/>
                </View>
                <TouchableOpacity style={styles.signBtn}>
                    <Text style={styles.signFont}>Login</Text>
                </TouchableOpacity>
                <View style={styles.loginCont}>
                    <Text>Already a member?  </Text>
                    <Text style={styles.loginFont}  onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
                </View>
                
            </View>

        </View>
    )
}