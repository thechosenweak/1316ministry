import React from 'react';
import { Touchable, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default AppButton = ({text,onPress,style}) => {

    return (
        <>
            <View style ={{backgroundColor:"white", borderRadius:30, height:60, width:"70%", backgroundColor:"#F4E25B"}}>
                <TouchableOpacity onPress={onPress} style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    <Text style ={style}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}