import { View, Text, TextInput } from 'react-native';
import React from 'react';

const AppTextInput = ({placeholder,onChange,defaultValue,style,secureTextEntry}) => {
  return (
    <View style={{backgroundColor:"#E7E8E8",borderRadius:5,marginTop:10,marginBottom:10}}>
        <View style={{padding:5,marginLeft:10}}>
            <TextInput 
                placeholderTextColor="black"
                placeholder={placeholder}
                onChange ={onChange}
                defaultValue ={defaultValue}
                style={style}
                secureTextEntry={secureTextEntry}
            />
      </View>
    </View>
  )
}

export default AppTextInput;