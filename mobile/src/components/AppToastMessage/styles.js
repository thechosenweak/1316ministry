import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: { 
        width: '95%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 8, 
        borderRadius: 6, 
        flexDirection: 'row',
    },
    body: {
        flex: 1, 
        marginLeft: 6,
        padding: 6
    },
    text1: { 
        fontWeight: '400', 
        fontSize: 15, 
        color: 'black',
    },
    text2: { 
        fontSize: 12, 
        color: 'black',
        marginTop: -3
    },
    iconBG : {
        padding: 2, 
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 12,
    }
});

export default style;