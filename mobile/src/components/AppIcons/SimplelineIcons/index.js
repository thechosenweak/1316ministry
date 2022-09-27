import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const SimpleLineIconsIcons = ({name, size, color, icon, onPress}) => {

  return (
    <TouchableOpacity>
      <View>
        <SimpleLineIcons name={name} size={size} color ={color} icon ={icon} onPress={onPress} />
      </View>
    </TouchableOpacity>
  )
}

export default SimpleLineIconsIcons