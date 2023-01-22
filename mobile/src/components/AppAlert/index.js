import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";

const AppAlert = ({
    isVisible,
    setVisible,
    isBackdropPressDisable,
    title,
    message,
}) => {
    return(
        <Modal 
            isVisible={isVisible} 
            style={{margin: 0}}
            useNativeDriver={true}
            onBackdropPress={isBackdropPressDisable ? null : () => setVisible(false)}
        >
            <View style={{ backgroundColor: 'white', padding: 12, margin: 20, borderRadius: 6}}>
                <Text style={{fontWeight: "bold", fontSize: 15}}>{title}</Text>
                <Text style={{fontSize: 14, marginBottom: 12, marginTop: 12}}>{message}</Text>
                <Text style={{alignSelf: 'flex-end', fontWeight: 400}} onPress={() => setVisible(false)}>Close</Text>
            </View>
        </Modal>
    )
}

export default AppAlert;