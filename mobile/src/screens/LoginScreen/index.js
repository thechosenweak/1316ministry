import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './styles';

export default function LoginScreen({navigation}){
    
    return (
        <View style={styles.container}>
            <View style={styles.img_Cont}>
                <Image style={styles.imgStyle} source={require('../../assets/img/1316-ministry.jpg')}/>
            </View>

            <View>
                <Text style={styles.headerFont}>Login</Text>

                <View style={styles.accountCont}>

                    <TextInput style={styles.inputLiner} maxLength ={100} placeholder="Email ID"/>

                    <TextInput style={styles.inputLiner} maxLength ={50} placeholder="Password"/>

                    <TouchableOpacity style={styles.forgotCont}>
                        <Text style={styles.forgotFont}>Forgot Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.logBtn}>
                        <Text style={styles.logFont}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.orCont}>
                        <Text>_____________________OR_____________________</Text>
                    </View>

                    <TouchableOpacity style={styles.googleCont}>
                        <Text style={styles.googleFont}>Login with Google</Text>
                    </TouchableOpacity>

                    <View style={styles.regCont}>
                        <Text>Not a user yet? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                            <Text style={styles.regFont}> Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </View>
    )
}