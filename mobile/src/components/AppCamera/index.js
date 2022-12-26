import React from 'react';
import styles from './styles';
import { Text, Modal, View, TouchableOpacity } from 'react-native';

const AppCamera = ({
    cameraVisible, 
    setCameraVisible
}) => {

    return (
        <Modal animationType='slide' visible={cameraVisible}>
            <View>
                <TouchableOpacity onPress={setCameraVisible}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default AppCamera;