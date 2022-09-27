import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import AppButton from '../../components/AppButton';

const LandingScreen = ({navigation}) => {
  return (
            <>
                <View style={{backgroundColor:"#2AC1D0", flex:1}}>
                    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white",fontSize:45, fontFamily:"tahoma",fontWeight:"bold"}}>1316</Text>
                        <Text style={{color:"white",fontSize:45, fontFamily:"tahoma",fontWeight:"bold"}}>MINISTRY</Text>
                    </View>
                    <View style={styles.img_Cont}>
                        <Image resizeMode='cover' style={styles.imgStyle} source={require('../../assets/img/message.jpg')}/>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{alignItems:"center"}}>
                            <AppButton text="LET'S GO!" style={{color:"black",fontWeight:"bold",fontSize:25}}
                                onPress={()=>navigation.navigate("LoginScreen")}/>
                            <View style={{marginTop:15}}>
                                <Text style={{color:"white", fontSize:15}}>Don't  have  an  account?</Text>
                            </View>
                            <TouchableOpacity onPress={()=>navigation.navigate("SignupScreen")}>
                                <View style={{marginTop:15}}>
                                    <Text style={{color:"white", fontSize:25,textDecorationLine:"underline"}}>Sign in here</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

export default LandingScreen;