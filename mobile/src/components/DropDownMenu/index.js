import { View, Text } from 'react-native'
import React from 'react'
import ModalDropdown from 'react-native-modal-dropdown'

const DropDownMenu = ({defaultValue,style,options,textStyle,dropdownTextStyle,dropdownStyle,onSelect}) => {
    return (
        <View style={{backgroundColor:"#E7E8E8",borderRadius:5,marginTop:10,marginBottom:10}}>
            <View style={{padding:5,marginLeft:10}}>
                <ModalDropdown 
                    defaultValue ={defaultValue}
                    style={style}
                    options={options}
                    textStyle={textStyle}
                    dropdownTextStyle={dropdownTextStyle}
                    dropdownStyle={dropdownStyle}
                    onSelect={onSelect}
                />
          </View>
        </View>
      )
}

export default DropDownMenu