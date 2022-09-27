import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MaterialCommunityIconsIcons = ({name, size, color, icon, onPress}) => {

  return (
    <TouchableOpacity>
      <View>
        <MaterialCommunityIcons name={name} size={size} color ={color} icon ={icon} onPress={onPress} />
      </View>
    </TouchableOpacity>
  )
}

export default MaterialCommunityIconsIcons