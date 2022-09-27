import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Foundation from 'react-native-vector-icons/Foundation'

const FoundationIcons = ({name, size, color, icon, onPress}) => {

  return (
    <TouchableOpacity>
      <View>
        <Foundation name={name} size={size} color ={color} icon ={icon} onPress={onPress} />
      </View>
    </TouchableOpacity>
  )
}

export default FoundationIcons