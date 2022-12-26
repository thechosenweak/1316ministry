import { Dimensions, Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    }, 
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'green'
    }
})