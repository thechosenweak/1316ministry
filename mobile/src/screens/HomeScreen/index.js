import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '../../components/AppIcons/AntDesign'
import FontAwesome5 from '../../components/AppIcons/FontAwesome5'

const HomeScreen = () => {
  return (
    <View>
      <Text style={{color:"black"}}>HomeScreen</Text>
      <AntDesign name ="home" size={20} color="black"/>
      <FontAwesome5 name ="home" size={20} color="black"/>
      <FontAwesome5/>
    </View>
  )
}

export default HomeScreen