import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import styles from './styles';

export default function LoginScreen({navigation}){
    
    return (
            <>
            
                <View style={{backgroundColor:"white",flex:1}}>
                    <ImageBackground style= {{flex:1}} resizeMode="cover" source={require('../../assets/img/background1.png')}>
                   
                            <View style={{padding:30,justifyContent:"center",flex:1}}>
                                <View style={{padding:20,backgroundColor:"white",borderRadius:15,elevation:15}}>
                                    
                                    <Text style={{color:"black", fontSize:14}}>Your email</Text>
                                    <AppTextInput placeholder="Your email" style={{fontWeight:"bold", fontSize:20, color:"black"}}/>
                                
                                    <Text style={{color:"black", fontSize:14}}>Your password</Text>
                                    <AppTextInput placeholder="Your password" secureTextEntry={true} style={{fontWeight:"bold", fontSize:20, color:"black"}}/>
                                    
                                    <View style={{marginTop:20}}>
                                        <View style={{alignItems:"center"}}>
                                            <AppButton text="Login" style={{color:"White",fontWeight:"bold",fontSize:25}}/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            
                    </ImageBackground>
                </View>
                
            </>
        )
    }



 // {/* <View style={styles.container}>
        //     {/* <View style={styles.img_Cont}>
        //         <Image style={styles.imgStyle} source={require('../../assets/img/1316-ministry.jpg')}/>
        //     </View>

        //     <View>
        //         <Text style={styles.headerFont}>Login</Text>

        //         <View style={styles.accountCont}>

        //             <TextInput style={styles.inputLiner} maxLength ={100} placeholder="Email ID"/>

        //             <TextInput style={styles.inputLiner} maxLength ={50} placeholder="Password"/>

        //             <TouchableOpacity style={styles.forgotCont}>
        //                 <Text style={styles.forgotFont}>Forgot Password</Text>
        //             </TouchableOpacity>

        //             <TouchableOpacity style={styles.logBtn}>
        //                 <Text style={styles.logFont}>Login</Text>
        //             </TouchableOpacity>

        //             <View style={styles.orCont}>
        //                 <Text>_____________________OR_____________________</Text>
        //             </View>

        //             <TouchableOpacity style={styles.googleCont}>
        //                 <Text style={styles.googleFont}>Login with Google</Text>
        //             </TouchableOpacity>

        //             <View style={styles.regCont}>
        //                 <Text>Not a user yet? </Text>
        //                 <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        //                     <Text style={styles.regFont}> Register</Text>
        //                 </TouchableOpacity>
        //             </View>

        //         </View>

        //     </View> 

        // </View> */}