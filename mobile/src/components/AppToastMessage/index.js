import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppToastMessage = ({
    text1,
    text2,
    type,
    props
},) => {

    const toast = {
        bgColor: type==='success' ? '#eaf7ee' : 
                 type==='warning' ? '#fef7ea' : 
                                    '#fcede9'
        ,
        iconBgColor: type==='success' ? '#3fbd61' : 
                     type==='warning' ? '#ee9500' : 
                                        '#eb4e2c'
        ,
        icon: type==='success' ? <Ionicons name="checkmark-circle" size={30} color="#fff" /> :
              type==='warning' ? <Ionicons name="information-circle-sharp" size={30} color="#fff" /> : 
                                 <Ionicons name="close-circle-sharp" size={30} color="#fff" />
        ,
    }

    return (
        <View style={[styles.container, {backgroundColor: toast.bgColor, borderWidth: .5, borderColor: toast.iconBgColor}]}>
            <View style={[styles.iconBG, {backgroundColor: toast.iconBgColor}]}>
                { toast.icon }
            </View>
            <View style={styles.body}>
                <Text style={styles.text1}>{text1}</Text>
                { text2 && <Text style={styles.text2}>{text2}</Text> }
            </View>
        </View>
    )
};

export default AppToastMessage;