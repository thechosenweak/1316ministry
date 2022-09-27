import React, {useState} from 'react';
import { View, Text, Image, ScrollView, ImageBackground,} from 'react-native';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DropDownMenu from '../../components/DropDownMenu';
import styles from './styles';
import Ionicons from '../../components/AppIcons/Ionicons'
export default function SignupScreen({navigation}){

    return (
        <View style={styles.container}>
            <ImageBackground style= {{flex:1}} resizeMode="cover" source={require('../../assets/img/background1.png')}>
                <View  style={{padding:30,justifyContent:"center",flex:1}}>
                    <View style={{padding:20,backgroundColor:"white",borderRadius:15,elevation:15, height: 400,}}>
                        <ScrollView>

                            <Text style={{color:"black", fontSize:14}}>Profile</Text>
                            <AppTextInput  style={{fontWeight:"bold", fontSize:20, color:"black"}} placeholder='Profile Picture'/>

                            <Text style={{color:"black", fontSize:14}}>First Name</Text>
                            <AppTextInput  style={{fontWeight:"bold", fontSize:20, color:"black"}} placeholder='First Name'/>

                            <Text style={{color:"black", fontSize:14}}>Last Name</Text>
                            <AppTextInput  style={{fontWeight:"bold", fontSize:20, color:"black"}} placeholder='Last Name'/>

                            <Text style={{color:"black", fontSize:14}}>Address</Text>
                            <AppTextInput  style={{fontWeight:"bold", fontSize:20, color:"black"}} placeholder='Home Address'/>

                            <Text style={{color:"black", fontSize:14}}>Age</Text>
                            <AppTextInput  style={{fontWeight:"bold", fontSize:20, color:"black"}} placeholder='Age'/>

                            <Text style={{color:"black", fontSize:14}}>Select Group</Text>
                            <DropDownMenu style={{backgroundColor:"#E7E8E8",borderRadius:5,marginTop:10,marginBottom:10}}
                            textStyle = {{fontSize:20, fontWeight:'bold'}} dropdownStyle = {{width:280}} dropdownTextStyle = {{fontSize:15, fontWeight:'bold',}} 
                            options={['Group 1', 'Group 2', 'Group 3']}/>

                            <Text style={{color:"black", fontSize:14}}>UserName</Text>
                            <AppTextInput  style={{fontWeight:"bold", fontSize:20, color:"black"}} placeholder='Userame'/>

                            <Text style={{color:"black", fontSize:14}}>Password</Text>
                            <AppTextInput style={{fontWeight:"bold", fontSize:20, color:"black"}} secureTextEntry={true} placeholder='Password'/>

                            <Text style={{color:"black", fontSize:14}}>Confirm Password</Text>
                            <AppTextInput style={{fontWeight:"bold", fontSize:20, color:"black"}} secureTextEntry={true} placeholder='Confirm   Password'/>


                            <View style={{marginTop:20}}>
                                <View style={{alignItems:"center"}}>
                                    <AppButton text="Sign up" onPress={()=>navigation.navigate("HomeScreen")} style={{color:"White",fontWeight:"bold",fontSize:25}}/>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>


        </View>
    )
}