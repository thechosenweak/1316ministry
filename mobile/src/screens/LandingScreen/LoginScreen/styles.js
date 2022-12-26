import { Dimensions, Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    title: {
        textAlign: 'center', 
        fontWeight: "bold", 
        marginBottom: 35, 
        fontSize: 20, 
        color: 'green'
    },
    formContainer: {
        width: '90%', 
        backgroundColor: 'white', 
        padding: 12
    }
})