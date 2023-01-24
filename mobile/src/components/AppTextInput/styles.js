import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        borderRadius: 8, 
        marginBottom: 8, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingLeft: 8,
        borderStartWidth: 3
    },
    textInput: {
        color: '#363636', 
        flex: 1
    }
})