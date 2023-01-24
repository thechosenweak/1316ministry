import { Platform } from 'react-native';
import { AppToastMessage } from '../components';

export const API_ERROR_MESSAGE = "Connection error, please check your internet connection.";

export const APP_TOAST = {
    config: {
        warning: ({ text1, text2, props }) => (
            <AppToastMessage text1={text1} text2={text2} props={props} type='warning' />
        ),
        error: ({ text1, text2, props }) => (
            <AppToastMessage text1={text1} text2={text2} props={props} type='error' />
        ),
        success: ({ text1, text2, props }) => (
            <AppToastMessage text1={text1} text2={text2} props={props} type='success' />
        )
    },
    visibilityTime: 1800,
    position: 'top',
    topOffset: Platform.OS==='ios' ? 55 : 10,
    bottomOffset: 0
}