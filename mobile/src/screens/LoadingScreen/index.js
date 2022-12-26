import { View, Text, ActivityIndicator } from "react-native";
import styles from './styles';

export default function LoadingScreen(){
    return (
        <View style={styles.container}>
            <ActivityIndicator 
                size="large"
                color="green"
            />
        </View>
    )
}