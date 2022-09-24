import { Dimensions, Platform, StyleSheet } from 'react-native';
import { BACKGROUND_COLOR,ACCENT_COLOR,OTHER_COLOR,HEADER_COLOR } from './../../constants';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },

    img_Cont:{
        height:'30%',
        width:'100%',
        marginVertical:15,
        alignItems:'center',
        justifyContent:'center',
    },

    imgStyle:{
        height:200,
        width:200,
    },
    
    headerFont:{
        fontWeight:'900',
        fontSize:25,
        marginHorizontal:12,
        color:HEADER_COLOR,
    },

    accountCont:{
        padding:5,
        margin:10,
        
    },

    inputLiner:{
        borderBottomWidth:1,
        marginHorizontal:15,
    },

    forgotCont:{
        flexDirection:'row-reverse'
    },

    forgotFont:{
        paddingVertical:20,
        color: ACCENT_COLOR,
        marginHorizontal:15,
    },

    logBtn:{
        backgroundColor:ACCENT_COLOR,
        alignItems:'center',
        marginHorizontal:15,
        borderRadius:12,
        padding:12,
    },

    logFont:{
        color:BACKGROUND_COLOR,
    },

    orCont:{
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },

    googleCont:{
        borderRadius:12,
        padding:15,
        backgroundColor:OTHER_COLOR,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginHorizontal:15,
    },

    googleFont:{
        fontWeight:'bold',
        fontSize:12,
    },

    regCont:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        padding:10,
    },

    regFont:{
        color:ACCENT_COLOR,
    },
})