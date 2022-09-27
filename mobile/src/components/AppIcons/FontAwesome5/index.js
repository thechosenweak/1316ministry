import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const FontAwesome5Icons = ({name, size, color, icon, onPress}) => {

  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5 name={name} size={size} color ={color} icon ={icon} onPress={onPress} />
      </View>
    </TouchableOpacity>
  )
}

export default FontAwesome5Icons