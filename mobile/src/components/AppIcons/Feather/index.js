import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const FeatherIcons = ({name, size, color, icon, onPress}) => {

  return (
    <TouchableOpacity>
      <View>
        <Feather name={name} size={size} color ={color} icon ={icon} onPress={onPress} />
      </View>
    </TouchableOpacity>
  )
}

export default FeatherIcons