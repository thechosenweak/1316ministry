import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'

const FontistoIcons = ({name, size, color, icon, onPress}) => {

  return (
    <TouchableOpacity>
      <View>
        <Fontisto name={name} size={size} color ={color} icon ={icon} onPress={onPress} />
      </View>
    </TouchableOpacity>
  )
}

export default FontistoIcons