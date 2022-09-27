import { Dimensions, Platform, StyleSheet } from 'react-native';
import { BACKGROUND_COLOR,ACCENT_COLOR,OTHER_COLOR,HEADER_COLOR } from './../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },

    imageCont: {
        margin:12,
        padding: 10,
        height: 150,
        width: 150,

    },

    imgSelect:{
        flexDirection:'row',
        alignItems: 'center',
    },

    gallPick:{
        fontSize: 16,
        fontWeight:'bold',
        marginHorizontal:10,
    },
    
    credCont:{
        height: '75%',
        borderWidth: 1,
        elevation: 15,
        padding: 10,
        backgroundColor: BACKGROUND_COLOR
    },

    inputStyle:{
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
    },

    dDownCont:{
        marginVertical: 5,
        padding: 15,
        width: '100%',
        backgroundColor: '#D3D0D0',
        alignItems:'center',
    },

    dDownStyle:{
        width:'100%',
    },

    signUpBtn:{
        marginVertical: 15,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FBC944',
        justifyContent: 'center',
        alignItems: 'center'
    },

    signUpFont:{
        color:BACKGROUND_COLOR,
        fontSize: 22,
        fontWeight: '900'
    },

})