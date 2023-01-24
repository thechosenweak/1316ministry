import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        height: 60, 
        borderBottomWidth: .5, 
        borderColor: '#cccccc', 
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 17
    },
})