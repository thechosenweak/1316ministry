import { Dimensions, Platform, StyleSheet } from 'react-native';
import { BACKGROUND_COLOR,ACCENT_COLOR,OTHER_COLOR,HEADER_COLOR } from './../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    
    img_Cont:{
        height:'30%',
        width: '100%',
        marginVertical:15,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
    },

    imgStyle:{
        height:200,
        width:200,
    },
    
    headerFont:{
        fontWeight:'900',
        fontSize:25,
        color:HEADER_COLOR,
    },

    credCont:{
        width:'90%',
        padding:2,
        marginVertical:10,
        alignItems:'center',
        justifyContent: 'flex-start',
    },
    inputCont:{
        width:'90%',
        borderBottomWidth:1,
    },

    signBtn:{
        backgroundColor:ACCENT_COLOR,
        alignItems:'center',
        marginHorizontal:15,
        borderRadius:12,
        padding:10,
    },

    signFont:{
        color:BACKGROUND_COLOR,
    },

    loginCont:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        marginBottom:15,
    },

    loginFont:{
        color:ACCENT_COLOR,
        fontWeight: "900",
    },

})