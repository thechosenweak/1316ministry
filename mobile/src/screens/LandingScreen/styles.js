import { Dimensions, Platform, StyleSheet } from 'react-native';
import { BACKGROUND_COLOR,ACCENT_COLOR,OTHER_COLOR,HEADER_COLOR } from '../../constants';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },

    img_Cont:{
        height:'30%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:50,
        
        
    },

    imgStyle:{
        height:"100%",
        width:"100%",
    },
    
 
})