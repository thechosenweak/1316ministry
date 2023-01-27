import React from "react";
import { LogBox } from "react-native";
import Modal from "react-native-modal";
import { CameraScreen } from 'react-native-camera-kit';

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`]);

const AppCamera = ({
    isVisible,
    setIsVisible,
    onBackButtonPress,
    onRead
}) => {
    const [isScanned, setIsScanned] = React.useState(false);

    React.useEffect(() => {
        setIsScanned(false)
    },[isVisible])

    return(
        <Modal 
            isVisible={isVisible} 
            style={{margin: 0}}
            useNativeDriver={true}
            onBackButtonPress={onBackButtonPress}
        >
            <CameraScreen
                scanBarcode={true}
                onReadCode={(event) => {
                    if(!isScanned){
                        setIsScanned(true)
                        setIsVisible(false)
                        onRead(event.nativeEvent.codeStringValue)
                    }
                }}
                showFrame={true}
                frameColor='white'
            />
        </Modal>
    )
}

export default AppCamera;