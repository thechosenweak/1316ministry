import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'

const OcticonsIcons = ({name, size, color, icon, onPress}) => {

  return (
    <TouchableOpacity>
      <View>
        <Octicons name={name} size={size} color ={color} icon ={icon} onPress={onPress} />
      </View>
    </TouchableOpacity>
  )
}

export default OcticonsIcons